define("data_list/DataListView", [
    "use!backbone", 
    "use!handlebars",
    "datum/Datum",
    "data_list/DataList",
    "text!data_list/data_list.handlebars",
    "text!data_list_title/data_list_title.handlebars",
    "data_list_title/DataListTitle",
    "data_list_title/DataListTitleView"

 //   "search/Search"
], function(Backbone, Handlebars, Datum, DataList, data_listTemplate, data_list_titleTemplate, DataListTitle, DataListTitleView) {
    var DataListView = Backbone.View.extend(
    /** @lends DatumView.prototype */
    {
        /**
         * @class A list of datum that are returned as a search result.  It will have check-boxes on the side and a datum menu on the bottom.   
         *
         * @extends Backbone.View
         * @constructs
         */
        initialize : function() {
       
        },

        model : DataList,
        classname : "data_list",
        template: Handlebars.compile(data_listTemplate),
        
        initialize : function () {

			var tags = this.collection;

			tags.on('add', this.addOne, this);
			tags.on('reset', this.addAll, this);
			tags.on('all', this.render, this);

			tags.pager();

		},

		addAll : function () {
			this.collection.each (this.addOne);
		},
		
		addOne : function ( item ) {
			var view = new views.DatumLatexView({model:Datum});
			$('#content').append(view.render().el);
		},

		
        render : function() {
//        	Handlebars.registerPartial("datum_menu", this.menuview.template(this.menuview.model.toJSON()) );
        	
        	
        	$(this.el).html(this.template(this.model.toJSON()));
            return this;
        } 
        
    });

    return DataListView;
}); 
