define([
    "use!backbone", 
    "use!handlebars",
    "text!authentication/authentication.handlebars",
    "authentication/Authentication", 
    "user/User", 
    "user/UserView",
    "libs/Utils"
], function(
    Backbone, 
    Handlebars, 
    authTemplate, 
    Authentication, 
    User, 
    UserView
) {
  var AuthenticationView = Backbone.View.extend(
  /** @lends AuthenticationView.prototype */
  {
    /**
     * @class This is the login logout surface.
     * 
     * @description Starts the Authentication and initializes all its children.
     * 
     * @extends Backbone.View
     * @constructs
     */
    initialize : function() {
      Utils.debug("AUTH init: " + this.el);
      
      // Create a UserView
      // TODO Move below this.render() after the user view is no longer a partial.
      this.userView = new UserView({
        model: new User()
      });
      
      this.authenticatePreviousUser();
      
      // this.on('all', function(e) {
        // this.render();
      // });
      
      // Re-render every time the Authentication changes
      this.model.bind('change', this.render, this);
    },

    /**
     * The underlying model of the AuthenticationView is an Authentication
     */    
    model : Authentication,

    /**
     * The userView is a child of the AuthenticationView.
     */
    // TODO Make this a real child, rather than just a partial.
    userView : UserView,
    
    /**
     * Events that the AuthenticationView is listening to and their handlers.
     */
    events : {
      "click .logout" : "logout",
      "click .login" : "login"
    },
    
    /**
     * The Handlebars template rendered as the AuthenticationView.
     */
    template : Handlebars.compile(authTemplate),
    
    /**
     * Renders the AuthenticationView and all of its child Views.
     */
    render : function() {
      Utils.debug("AUTH render: " + this.el);
      if (this.model != undefined) {
        // Display the AuthenticationView
        this.setElement($("#authentication"));
        Handlebars.registerPartial("user", this.userView.template(this.userView.model.toJSON()));
        $(this.el).html(this.template(this.model.toJSON()));
        
        Utils.debug("\trendering login: " + this.model.get("username"));
      } else {
        Utils.debug("\tAuthentication model was undefined.");
      }
      
      return this;
    },
      
    /**
     * Updates the display to show the login.
     */
    renderLogin : function() {
      this.render();
      $("#logout").hide();
      $("#login").show();
    },
    
    /**
     * Updates the display to show the logout.
     */
    renderLogout : function() {
      this.render();
      $("#logout").show();
      $("#login").hide();
    },
    
    /**
     * Logout removes the stringified user and the username from local storage,
     * and then authenticates public into the app.
     */
    logout : function() {
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      
      this.authenticateAsPublic();
    },
    
    /**
     * Login tries to get the username and password from the user interface, and
     * calls the view's authenticate function.
     */
    login : function() {
      Utils.debug("LOGIN");
      this.authenticate(document.getElementById("username").value, 
          document.getElementById("password").value);
    },
    
    /**
     * Load sample calls the UserView's function to load a sample user, at this
     * time the sample user is Edward Sapir, a well-known early fieldlinguist.
     * He is simply loaded as a user, without calling any user authentication
     * functions.
     */
    loadSample : function() {      
      // Save the sample user in our Models
      this.userView.loadSample();
      this.model.set("user", this.userView.model);
      this.model.set("username", this.userView.model.get("username"));
      
      // Update the display
      this.renderLogout();
    },
    
    /**
     * Authenticate accepts a username and password, creates a simple user, and
     * passes that user to the authentication module for real authentication
     * against a server or local database. The Authenticate function also sends a
     * callback which will render views once the authentication server has
     * responded. If the authentication result is null, it can flash an error to
     * the user and then logs in as public.
     * 
     * @param username {String} The username to authenticate.
     * @param password {String} The password to authenticate.
     */
    authenticate : function(username, password) {
      // Current signed in as the public user - special case authentication
      if (username == "public") {
        this.authenticateAsPublic();
        return;
      }
      
      // Currently signed in as Sapir - no authentication needed
      if (username == "sapir"){
        this.loadSample();
        return;
      }
      
      // Temporarily keep the given's credentials
      var tempuser = new User();
      tempuser.set("username", username);
      tempuser.set("password", password);

      var self = this;
      this.model.authenticate(tempuser, function(u) {
        if (u == null) {
          Utils.debug("Authentication failed. Authenticating as public.");
          self.authenticateAsPublic();
          return;
        }
        
        // Save the authenticated user in our Models
        self.userView.model = u;
        self.model.set("user", u);
        self.model.set("username", u.get("username"));

        // Save the authenticated user in localStorage
        localStorage.setItem("username", u.get("username"));
        localStorage.setItem("user", JSON.stringify(u.toJSON()));
        
        // Update the display
        self.renderLogout();
      });
    },
    
    /**
     * Authenticate as Public simply sends "public" to the authenticate method,
     * which contacts the server most likleyt o do things like recent activity
     * of the "public" user etc.
     */
    authenticateAsPublic : function() {
      // Load the public user
      this.userView.loadPublic();
      u = this.userView.model;
      
      // Save the public user in our Models
      this.model.set("user", u);
      this.model.set("username", u.get("username"));
      
      // Save the public user in localStorage
      localStorage.setItem("username", u.get("username"));
      localStorage.setItem("user", JSON.stringify(u.toJSON()));
      
      // Update the display
      this.renderLogin();
    },
    
    /**
     * AuthenticatePreviousUser is intended to be called on page load, it looks
     * for a stringified user in the localstorage, and loads them with no
     * authentication. If the authentication is stale, it will do a quick
     * password authentication view to let user know they haven't been active in
     * a while.
     * 
     */
    authenticatePreviousUser : function() {
      if (localStorage.getItem("user")) {
        // Reform the previous user from localStorage
        var u = JSON.parse(localStorage.getItem("user"));
        u = new User(u);
        
        // Save the previous user in our Models
        this.userView.model = u;
        this.model.set("user", u);
        this.model.set("username", u.username);
        
        if (this.model.staleAuthentication) {
          showQuickAuthenticateView();
        }
        
        // Update the display
       this.renderLogout();
      } else {
        Utils.debug("No previous user.");
        this.authenticateAsPublic();
      }
    },
    
    /**
     * TODO the ShowQuickAuthentication view popups up a password entry view.
     * This is used to unlock confidential datum, or to unlock dangerous settings
     * like removing a corpus. It is also used if the user hasn't confirmed their
     * identitiy in a while.
     */
    showQuickAuthenticateView : function() {

    }
  });

  return AuthenticationView;
});