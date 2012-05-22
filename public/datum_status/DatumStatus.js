define("datum_status/DatumStatus", [
    "use!backbone"
], function(Backbone) {
    var DatumStatus = Backbone.Model.extend(
    /** @lends DatumStatus.prototype */
    {
       /**
        * @class The datum status lets the fieldlinguists assign their own 
        *       status categoriest o data (ie check with informant, check 
        *       with x, checked, checked and wrong, hidden, deleted, whatever 
        *       status they decide.
        *
        * @description The initialize function The datum status creates a 
        *       new status object with the status set to the default (for 
        *       example, checked)
        * 
        * @extends Backbone.Model
        * @constructs
        */
        initialize: function() {
        },
    	defaults: {
//    	      statuses: ["Checked","To be checked","Deleted"],
    	     
    	      statuses: [{
    	          id: 1,
    	          label: 'Checked'
    	          
    	      }, {
    	          id: 2,
    	          label: 'To be checked',
    	          selected: true 
    	      }, {
    	          id: 3,
    	          label: 'Deleted'
    	      }], 
    	      
    	      active: 0,
    	      defaultStatus: 0
    	   },
    });
    
    return DatumStatus;
});