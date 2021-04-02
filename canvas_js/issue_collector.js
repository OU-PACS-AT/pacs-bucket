// Change Pages button to go straight to 'View All Pages'
// Requires jQuery!
jQuery.get('/api/v1/users/self/profile', function(profile) {

    jQuery.ajax({
        url: "https://jira.outreach.ou.edu/s/36ae554b64fdcf7be35495e7ef35c16d-T/-gfcnrf/804002/d4c81000851250f0d0a03cf6ffbecdab/3.1.0/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=4e126082",
        //url: "https://jira.outreach.ou.edu/s/f09099539eadc6489323230c3c1dfcdd-T/ooawnv/712004/d4c81000851250f0d0a03cf6ffbecdab/2.0.31/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=a4baa461",
        type: "get",
        cache: true,
        dataType: "script"
    }).success(function(data, textStatus, jqXHR) {
        window.ATL_JQ_PAGE_PROPS = jQuery.extend(window.ATL_JQ_PAGE_PROPS, {
        
        	// ==== custom trigger function ====
        	triggerFunction : function( showCollectorDialog ) {
            	//Requires that jQuery is available! 
            	jQuery("#pacs_help_link").click(function(e) {
            		e.preventDefault();
            		showCollectorDialog();
            		jQuery("#jic-collector-form .content-body .event-shield-wrapper #name-group").hide();
            		jQuery("#jic-collector-form .content-body .event-shield-wrapper #email-group").hide();
            	});
        	},
        	// ==== we add the code below to set the field values ====
        	fieldValues: {
         		fullname : profile.name,
        		email : profile.primary_email
        	}					
        });
        
    }).fail(function(jqXHR, textStatus) {
        console.log("Error retrieving Service Desk Issue Collector: " + textStatus);        
    });
    
    
});
