define([
    'underscore',
    'jquery',
    'storage',
    'classes/Extension',
    'bootstrap-tour'
], function(_, $, storage, Extension, Tour) {

    var welcomeTour = new Extension('welcomeTour', 'Welcome tour', false, true);

    welcomeTour.onReady = function() {
        var tour = new Tour({
            keyboard: false,
            storage: {
                getItem: function() {
                },
                setItem: function() {
                },
                removeItem: function() {
                }
            },
            onEnd: function() {
                storage.welcomeTour = 'done';
            },
            template: [
                '<div class="popover tour">',
                '   <div class="arrow"></div>',
                '   <h3 class="popover-title"></h3>',
                '   <div class="popover-content"></div>',
                '   <nav class="popover-navigation">',
                '       <button class="btn btn-primary" data-role="next">Next</button>',
                '       <button class="btn btn-default" data-role="end">Got it!</button>',
                '   </nav>',
                '</div>'
            ].join("")
        });
        tour.addSteps([
            {
                element: '.navbar-inner',
                title: 'Welcome to StackEdit!',
                content: [
                    '<i class="icon-lock pull-left"></i>',
                    '<p><strong>You are using the new secured platform.</strong> If you want to recover your documents from the old platform <a target="_blank" href="http://benweet.github.io/stackedit/recovery.html">click here</a>.</p>',
                    'Please click <code>Next</code> to take a quick tour.'
                ].join(""),
                placement: 'bottom',
            },
            {
                element: '.navbar .action-create-file',
                title: 'New document',
                content: 'Click the <i class="icon-file"></i> <code>New document</code> button to create a new document.',
                placement: 'left',
                reflex: true,
            },
            {
                element: '.document-panel .collapse-button',
                title: 'Toggle document',
                content: [
                    '<p>Click the <i class="icon-folder-open"></i> <code>Select document</code> button to switch to another document.</p>',
                    '<b>NOTE: </b>Use <code>Ctrl+[</code> and <code>Ctrl+]</code> shortcuts to toggle quickly.'
                ].join(""),
                placement: 'left',
                reflex: true,
            },
            {
                element: '.menu-panel .collapse-button',
                title: 'Menu',
                content: [
                    '<p>Use the <i class="icon-provider-stackedit"></i> menu to synchronize your document on <i class="icon-provider-gdrive"></i> <code>Google Drive</code> or <i class="icon-provider-dropbox"></i> <code>Dropbox</code>.</p>',
                    'Use also this menu to publish your document on <i class="icon-provider-github"></i> <code>GitHub</code>, <i class="icon-provider-blogger"></i> <code>Blogger</code>...'
                ].join(""),
                placement: 'right',
                reflex: true,
            },
            {
                element: '#extension-buttons .button-synchronize',
                title: 'Synchronize',
                content: '<p>Once imported/exported, use the <i class="icon-refresh"></i> <code>Synchronize</code> button to force the synchronization (this is done automatically every 3 minutes).</p>',
                placement: 'bottom',
                reflex: true,
            },
            {
                element: '#extension-buttons .button-publish',
                title: 'Update publications',
                content: 'Once published, use the <i class="icon-share"></i> <code>Publish</code> button to update your publication.',
                placement: 'bottom',
                reflex: true,
            },
            {
                element: '.navbar-inner',
                title: 'Happy StackWriting!',
                content: [
                    'Enjoy, and don\'t forget to rate <b>StackEdit</b> on <a target="_blank" href="https://chrome.google.com/webstore/detail/stackedit/iiooodelglhkcpgbajoejffhijaclcdg/reviews">Chrome Web Store</a>.',
                ].join(""),
                placement: 'bottom',
            },
        ]);
        if(!_.has(storage, 'welcomeTour')) {
            tour.start();
        }
        $('.action-welcome-tour').click(function() {
            tour.restart();
        });
    };

    return welcomeTour;

});