// FileSaver.js: https://github.com/eligrey/FileSaver.js/blob/master/dist/FileSaver.min.js
(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});

/* rocketchat-dark-mode: https://github.com/pbaity/rocketchat-dark-mode */
const darkModeDefault=1;const darkModeSymbol=`<svg id="icon-darkmode" viewBox="0 0 468 468" fill="currentColor">
  <path d="M428.756 300.104c-.664-3.81-2.334-7.047-4.996-9.713-5.9-5.903-12.752-7.142-20.554-3.716-20.937 9.708-42.641 14.558-65.097 14.558-28.171 0-54.152-6.94-77.943-20.838-23.791-13.894-42.631-32.736-56.525-56.53-13.899-23.793-20.844-49.773-20.844-77.945 0-21.888 4.333-42.683 12.991-62.384 8.66-19.7 21.176-36.973 37.543-51.82 6.283-5.898 7.713-12.752 4.287-20.557-3.236-7.801-9.041-11.511-17.415-11.132-29.121 1.141-56.72 7.664-82.797 19.556C111.33 31.478 88.917 47.13 70.168 66.548c-18.747 19.414-33.595 42.399-44.54 68.95-10.942 26.553-16.416 54.39-16.416 83.511 0 29.694 5.806 58.054 17.416 85.082 11.613 27.028 27.218 50.344 46.824 69.949 19.604 19.599 42.92 35.207 69.951 46.822 27.028 11.607 55.384 17.415 85.075 17.415 42.64 0 81.987-11.563 118.054-34.69 36.069-23.124 63.05-54.006 80.944-92.645 1.524-3.423 1.951-7.036 1.28-10.838zm-122.191 84.064c-24.646 11.711-50.676 17.562-78.087 17.562-24.743 0-48.39-4.853-70.947-14.558-22.554-9.705-41.971-22.695-58.246-38.972-16.271-16.272-29.259-35.686-38.97-58.241-9.707-22.556-14.561-46.203-14.561-70.948 0-40.922 12.135-77.466 36.403-109.636 24.266-32.165 55.531-53.959 93.788-65.379-19.795 31.405-29.694 65.379-29.694 101.926 0 34.644 8.564 66.715 25.697 96.223 17.128 29.499 40.446 52.811 69.95 69.948 29.499 17.129 61.565 25.694 96.211 25.694 10.656 0 21.129-.855 31.408-2.57-17.318 20.938-38.307 37.255-62.952 48.951z"/>
</svg>`;const lightModeSymbol=`<svg  id="icon-darkmode" viewBox="0 0 302.4 302.4" fill="currentColor">
  <path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"/>
</svg>`;const darkModeToggleText={'en':'Toggle Dark Mode','de':'Dark Mode umschalten','fr':'Activer le mode sombre','es':'Alternar Modo Obscuro','hu':'Sötét mód be/ki','it':'Toggle Dark Mode','nl':'Toggle Dark Mode','pl':'Toggle Dark Mode','pt':'Alternar Modo Escuro','ru':'Смена оформления','he':'מצב לילה','hi':'डार्क मोड'}[defaultUserLanguage()]||'Toggle Dark Mode';const toggleButton=`<button id="dark-mode-button" class="rcx-box rcx-box--full rcx-button--small-square rcx-button--square rcx-button--small rcx-button--ghost rcx-button rcx-button-group__item rcx-@ue04p" aria-label="${darkModeToggleText}">D</button>`;function isDarkModeSet(){return localStorage.getItem('dark-mode')==='true'}
function getDarkModeIcon(){return `<svg class="rcx-box rcx-box--full rcx-icon--name-darkmode rcx-icon rcx-@4pvxx3" aria-hidden="true">
    <use xlink:href="#icon-darkmode"></use>
    ${isDarkModeSet() ? lightModeSymbol : darkModeSymbol}
  </svg>`}
function toggleDarkMode(){document.body.classList.toggle('dark-mode');const setting=(!isDarkModeSet()).toString();localStorage.setItem('dark-mode',setting)}
function addDarkModeToggle(){const sidebarToolbar=$('.rcx-sidebar-topbar .rcx-button-group').first();if(!sidebarToolbar.is(':visible')){setTimeout(addDarkModeToggle,250);return}
var darkModeButton=$('#dark-mode-button');if(darkModeButton.is(':visible')){return}
darkModeButton=$(toggleButton).prependTo(sidebarToolbar);darkModeButton.html(getDarkModeIcon());darkModeButton.on('click',function(){toggleDarkMode();darkModeButton.html(getDarkModeIcon());$(this).blur()})}
if(darkModeDefault){if(localStorage.getItem("dark-mode")===null){localStorage.setItem('dark-mode','true')}}
$(addDarkModeToggle);if(localStorage.getItem('dark-mode')==='true'){document.body.classList.add('dark-mode')}

// Custom functions
jQuery ("document"). ready ( function ()
{
	/*****************************************
	Hide marked threads
	*****************************************/

		window. checkThreadInstances = function ()
		{
			var threadSidebarInstances = jQuery ("div.thread-list"). length ;
			console. log ("Thread sidebar instances: " + threadSidebarInstances ) ;

			if ( threadSidebarInstances === 0 )
			{
				if ( window. failedThreadInstance === false )
				{
					window. failedThreadInstance = true ;
					window. failedThreadInstanceCounter = 0 ;
				}
				window. failedThreadInstanceCounter += 1 ;

				if ( window. failedThreadInstanceCounter <= 10 )
				{
					console. log ( ( 10 - window. failedThreadInstanceCounter ) + " checks left to determine that threads have been hidden") ;
					setTimeout ( function ()
					{
						window. checkThreadInstances () ;
					}, 500 ) ;
				}
				else
				{
					console. log ("Thread list seems to be hidden.") ;
				}
			}
			else
			{
				if ( window. gotThreadInstance === false )
				{
					window. gotThreadInstance = true ;
					window. checkThreadInstanceCounter = 0 ;
				}
				window. checkThreadInstanceCounter += 1 ;
				var hideableThreads = jQuery ("div.thread-list"). find ("li[data-emoji=':white_check_mark:'],li[data-emoji=':no_entry_sign:'],li[data-emoji=':arrow_lower_left:'],li[data-emoji=':x:'],li[data-emoji=':negative_squared_cross_mark:']") ;
				console. log ("Hideable threads: " + hideableThreads. length ) ;

				if ( window. persistentSetting_ShowMarkedThreads === false )
				{
					console. log ("Hiding hideable threads") ;

					jQuery ("div.contextual-bar__header-data"). find ("h1.contextual-bar__header-title"). html ("Threads ( " + hideableThreads. length + " hidden ) <br/> <span style=\"font-size: 0.6em; font-weight: 700;\">Click to show hidden threads</span>") ;

					jQuery. each ( hideableThreads, function ( index, value )
					{
						jQuery ( value ). parent (). parent (). hide () ;
					} ) ;
				}
				else
				{
					console. log ("Not hiding threads as user has chosen to show them.") ;
				}

				if ( window. checkThreadInstanceCounter < 10 )
				{
					console. log ( ( 10 - window. checkThreadInstanceCounter ) + " checks left ") ;
					setTimeout ( function ()
					{
						window. checkThreadInstances () ;
					}, 500 ) ;
				}
				else
				{
					console. log ("We're done ...") ;
				}
			}
		} ;

		jQuery ("body"). off ("click", "button.rc-room-actions__button[aria-label='Threads']"). on ("click", "button.rc-room-actions__button[aria-label='Threads']", function ()
		{
			window. gotThreadInstance = false ;
			window. failedThreadInstance = false ;
			window. persistentSetting_ShowMarkedThreads = false ;
			window. checkThreadInstances () ;
		} ) ;

		jQuery ("body"). off ("click", "div.contextual-bar__header-data"). on ("click", "div.contextual-bar__header-data", function ()
		{
			var threadSidebarInstances = jQuery ("div.thread-list"). length ;
			console. log ("Thread sidebar instances: " + threadSidebarInstances ) ;

			if ( threadSidebarInstances === 0 )
			{
				// nothing to do as there is no thread list
				return ;
			}

			if ( window. persistentSetting_ShowMarkedThreads === false )
			{
				window. persistentSetting_ShowMarkedThreads = true ;

				var hideableThreads = jQuery ("div.thread-list"). find ("li[data-emoji=':white_check_mark:'],li[data-emoji=':no_entry_sign:'],li[data-emoji=':arrow_lower_left:'],li[data-emoji=':x:'],li[data-emoji=':negative_squared_cross_mark:']") ;
				console. log ("Hideable threads: " + hideableThreads. length ) ;

				console. log ("Showing hideable threads") ;

				jQuery ("div.contextual-bar__header-data"). find ("h1.contextual-bar__header-title"). html ("Threads ( " + hideableThreads. length + " hideable ) <br/> <span style=\"font-size: 0.6em; font-weight: 700;\">Click to hide hideable threads</span>") ;

				jQuery. each ( hideableThreads, function ( index, value )
				{
					jQuery ( value ). parent (). parent (). show () ;
				} ) ;
			}
			else
			{
				window. persistentSetting_ShowMarkedThreads = false ;

				var hideableThreads = jQuery ("div.thread-list"). find ("li[data-emoji=':white_check_mark:'],li[data-emoji=':no_entry_sign:'],li[data-emoji=':arrow_lower_left:'],li[data-emoji=':x:'],li[data-emoji=':negative_squared_cross_mark:']") ;
				console. log ("Hideable threads: " + hideableThreads. length ) ;

				console. log ("Hiding hideable threads") ;

				jQuery ("div.contextual-bar__header-data"). find ("h1.contextual-bar__header-title"). html ("Threads ( " + hideableThreads. length + " hidden ) <br/> <span style=\"font-size: 0.6em; font-weight: 700;\">Click to show hidden threads</span>") ;

				jQuery. each ( hideableThreads, function ( index, value )
				{
					jQuery ( value ). parent (). parent (). hide () ;
				} ) ;
			}
		} ) ;

	/*****************************************
	Expand/collapse messages
	*****************************************/

		jQuery ("body"). off ("click", "li.message > div.message-body-wrapper > div.title > time.time"). on ("click", "li.message > div.message-body-wrapper > div.title > time.time", function ()
		{
			if ( jQuery ( this ). hasClass ("sst-expanded") === true )
			{
				jQuery ( this ). removeClass ("sst-expanded") ;
				jQuery ( this ). parent (). parent (). parent (). removeClass ("sst-expanded") ;
			}
			else
			{
				jQuery ( this ). addClass ("sst-expanded") ;
				jQuery ( this ). parent (). parent (). parent (). addClass ("sst-expanded") ;
			}
			jQuery ("div.messages-box > div.wrapper"). scrollTop ( 0 ) ;
			jQuery ("div.messages-box > div.wrapper"). scrollTop ( jQuery ( this ). parent (). parent (). parent (). offset (). top - ( jQuery ("div.messages-box > div.wrapper"). outerHeight () * 0.4 ) ) ;
			/* The animation feels jumpy. So, removed.
			jQuery ("div.messages-box > div.wrapper"). animate (
			{
				"scrollTop": jQuery ( this ). parent (). parent (). parent (). offset (). top - ( jQuery ("div.messages-box > div.wrapper"). outerHeight () * 0.6 )
			}, 500 ) ; */
		} ) ;

	/*****************************************
	Handling code snippets
	*****************************************/

		// Add HTML for the copy area

			var copyAreaHTML = "" ;
			copyAreaHTML += "<textarea class=\"sst-cs-copy-text\" id=\"sst-cs-copy-text\" style=\"opacity: 0 !important; pointer-events: none !important;\"></textarea>" ;

			jQuery ("body"). append ( copyAreaHTML ) ;

		// Add HTML for the open snippet in new tab area

			var openSnippetHTML = "" ;
			openSnippetHTML += "<a class=\"sst-cs-open-snippet\" id=\"sst-cs-open-snippet\" style=\"opacity: 0 !important; position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; z-index: -999; /* pointer-events: none !important */;\" href=\"data:text/plain;base64,RVJSOiBVbmFibGUgdG8gcGFyc2Ugc25pcHBldA==\" target=\"_blank\"></a>" ;

			jQuery ("body"). append ( openSnippetHTML ) ;

		// Handle events on code snippets
		jQuery ("body"). off ("click", "pre"). on ("click", "pre", function ()
		{
			// Excluded classes
				if ( jQuery ( this ). hasClass ("CodeMirror-line") === true )
				{
					return ;
				}
				if ( jQuery ( this ). hasClass ("sst-cs-code-popup-content") === true )
				{
					return ;
				}

			var codeElem = jQuery ( this ) ;

			// Find the message element
				var messageElem = codeElem ;
				var parentsProcessed = 0, maxParentsToProcess = 50 ;
				while ( parentsProcessed < maxParentsToProcess )
				{
					messageElem = messageElem. parent () ;
					if ( messageElem. is ("li.message") === true )
					{
						console. log ("Found message element with id: " + messageElem. attr ("id") ) ;
						break ;
					}

					parentsProcessed += 1 ;
				}

			// Find the message section element
				var messageSectionElem = messageElem ;
				parentsProcessed = 0, maxParentsToProcess = 50 ;
				while ( parentsProcessed < maxParentsToProcess )
				{
					messageSectionElem = messageSectionElem. parent () ;
					if ( messageSectionElem. is ("section.messages-container") === true )
					{
						console. log ("Found message section element with id: " + messageSectionElem. attr ("id") ) ;
						break ;
					}

					parentsProcessed += 1 ;
				}

			// Find the room name element

				var roomNameElem = messageSectionElem. children ("header.rc-header"). children ("div.rc-header__wrap"). children ("div.rc-header__content"). children ("div.rc-header__data"). children ("div.rc-header__name") ;

			// Parse information from message & room name element
				var roomName = "Unknown room" ;
				if ( roomNameElem. length === 1 )
				{
					roomName = roomNameElem. html (). split ("</svg>") ;
				}

				var messageID = "Unknown message" ;
				var senderUserName = "Unknown sender username" ;
				var senderAlias = "Unknown sender alias" ;
				var messageTS = "Unknown timestamp" ;
				var messageRCTS = "Unknown timestamp" ;
				if ( messageElem. length === 1 )
				{
					if ( messageElem. attr ("data-id") !== undefined )
					{
						messageID = messageElem. attr ("data-id") ;
					}
					if ( messageElem. attr ("data-username") !== undefined )
					{
						senderUserName = messageElem. attr ("data-username") ;
					}
					if ( messageElem. attr ("data-date") !== undefined )
					{
						messageRCTS = messageElem. attr ("data-date") ;
					}
					if ( messageElem. attr ("data-timestamp") !== undefined )
					{
						messageTS = messageElem. attr ("data-timestamp") ;
					}
					if ( messageElem. attr ("data-alias") !== undefined )
					{
						senderAlias = messageElem. attr ("data-alias") ;
					}
				}

			// Find code text and descriptor class
				var codeText = "Unable to parse code. Please contact support." ;
				var codeDescriptorClass = "No tag attached" ;
				var language = "plain-text" ;
				var fileName = messageID + "-UnnamedFile.txt" ;
				var codeTitle = "Snippet from message: " + messageID ;
				console. log ( codeTitle, language, fileName ) ;
				if ( codeElem. children ("code"). length === 1 )
				{
					codeText = codeElem. children ("code"). html () ;
					codeDescriptorClass = codeElem. children ("code"). attr ("class"). trim (). split (" "). splice ( -1 ) [ 0 ] ;

					// ```[Language Specifier ( none )]; file-name.ext; title;
					// ```codeDescriptorClass
					codeDescriptorClass = window. decodeURIComponent ( codeDescriptorClass ) ;
					codeDescriptorClass = codeDescriptorClass. split (";") ;
					var codeAttrLength = codeDescriptorClass. length ;

					if ( codeAttrLength > 0 )
					{
						language = codeDescriptorClass [ 0 ]. trim () ;
					}
					if ( codeAttrLength > 1 )
					{
						fileName = codeDescriptorClass [ 1 ]. trim () ;
					}
					if ( codeAttrLength > 2 )
					{
						codeTitle = codeDescriptorClass [ 2 ]. trim () ;
					}
					console. log ( codeTitle, language, fileName ) ;
				}
				else
				{
					codeText = codeElem. html () ;
				}

			// Update popup element to embed
				console. log ( codeTitle, language, fileName ) ;
				jQuery ("#sst-cs-code-snippet-popup-container"). remove () ;
				var popupHTML = "" ;
				popupHTML += "<div id=\"sst-cs-code-snippet-popup-container\" class=\"sst-cs-code-snippet-popup-container\"><div class=\"sst-cs-code-snippet-popup-header\"><div class=\"sst-cs-code-snippet-popup-header-data-container\"><div class=\"sst-cs-code-snippet-popup-header-data-title\">" + codeTitle + "</div><div class=\"sst-cs-code-snippet-popup-header-data-subline\"><div class=\"sst-cs-code-snippet-popup-header-data-language\">" + language + "</div><div class=\"sst-cs-code-snippet-popup-header-data-filename\">" + fileName + "</div></div></div><div class=\"sst-cs-code-snippet-popup-header-icons-container\"><div class=\"sst-cs-code-snippet-popup-header-icon-container new-tab-icon\"><div class=\"sst-cs-code-snippet-popup-header-icon\"></div></div><div class=\"sst-cs-code-snippet-popup-header-icon-container download-icon\"><div class=\"sst-cs-code-snippet-popup-header-icon\"></div></div><div class=\"sst-cs-code-snippet-popup-header-icon-container copy-icon\"><div class=\"sst-cs-code-snippet-popup-header-icon\"></div></div><div class=\"sst-cs-code-snippet-popup-header-icon-container close-icon\"><div class=\"sst-cs-code-snippet-popup-header-icon\"></div></div></div></div><div class=\"sst-cs-code-snippet-popup-code-container\"><div class=\"sst-cs-code-snippet-popup-code\"><pre class=\"sst-cs-code-popup-code-text\"><code>" + codeText + "</code></pre></div></div></div>" ;
				// console. log ( popupHTML ) ;
				jQuery ("div.menu-nav > div.main-content"). append ( popupHTML ) ;

				// jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-header"). children (".sst-cs-code-snippet-popup-header-data-container"). children (".sst-cs-code-snippet-popup-header-data-title"). html ( codeTitle ) ;
				// jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-header"). children (".sst-cs-code-snippet-popup-header-data-container"). children (".sst-cs-code-snippet-popup-header-data-subline"). children (".sst-cs-code-snippet-popup-header-data-language"). html ( language ) ;
				// jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-header"). children (".sst-cs-code-snippet-popup-header-data-container"). children (".sst-cs-code-snippet-popup-header-data-subline"). children (".sst-cs-code-snippet-popup-header-data-filename"). html ( fileName ) ;
				// jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-code-container"). children (".sst-cs-code-snippet-popup-code"). html ("<pre class=\"sst-cs-code-popup-code-text\"><code>" + codeText + "</code></pre>") ;
				// jQuery ("#sst-cs-code-snippet-popup-container"). css (
				// {
				// 	"display": "flex !important"
				// } ) ;
		} ) ;

		// Events on icons in the code snippet popup
		jQuery ("body"). off ("click", ".sst-cs-code-snippet-popup-header-icon-container"). on ("click", ".sst-cs-code-snippet-popup-header-icon-container", function ()
		{
			if ( jQuery ( this ). hasClass ("close-icon") )
			{
				jQuery ("#sst-cs-code-snippet-popup-container"). remove () ;
			}
			else if ( jQuery ( this ). hasClass ("copy-icon") )
			{
				// Get the text field
				jQuery ("#sst-cs-copy-text"). html ( jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-code-container"). children (".sst-cs-code-snippet-popup-code"). children ("pre.sst-cs-code-popup-code-text"). children ("code"). html () ) ;
				var copyText = jQuery ("#sst-cs-copy-text") [ 0 ] ;

				// Select the text field
				copyText. focus () ;
				copyText. select ();
				copyText. setSelectionRange ( 0, 99999999999 ) ; /*For mobile devices*/

				// Copy the text inside the text field
				document. execCommand ("copy") ;
				alert ("Snippet copied to clipboard.") ;
			}
			else if ( jQuery ( this ). hasClass ("download-icon") )
			{
				var blob = new Blob (
				[
					jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-code-container"). children (".sst-cs-code-snippet-popup-code"). children ("pre.sst-cs-code-popup-code-text"). children ("code"). html ()
				],
				{
					type: "text/plain;",
				} ) ;
				saveAs ( blob, jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-header"). children (".sst-cs-code-snippet-popup-header-data-container"). children (".sst-cs-code-snippet-popup-header-data-subline"). children (".sst-cs-code-snippet-popup-header-data-filename"). html () ) ;
			}
			else if ( jQuery ( this ). hasClass ("new-tab-icon") )
			{
				var link = "data:text/plain;base64," + window. btoa ( jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-code-container"). children (".sst-cs-code-snippet-popup-code"). children ("pre.sst-cs-code-popup-code-text"). children ("code"). html () ) ;
				console. log ("Attempting to open link: ") ;
				console. log ( link ) ;
				// jQuery ("#sst-cs-open-snippet"). attr ("href", link ) ;
				// console. log ( jQuery ("#sst-cs-open-snippet"). attr ("href") ) ;
				// // jQuery ("#sst-cs-open-snippet"). css (
				// // {
				// // 	"pointer-events": "all !important"
				// } ) ;
				// console. log ( jQuery ("#sst-cs-open-snippet") [ 0 ] ) ;
				// setTimeout ( function ()
				// {
				// 	jQuery ("#sst-cs-open-snippet"). click () ;
				// }, 500 ) ;
				// setTimeout ( function ()
				// {
				// 	// jQuery ("#sst-cs-open-snippet"). css (
				// 	// {
				// 	// 	"pointer-events": "none !important"
				// 	// } ) ;
				// 	jQuery ("#sst-cs-open-snippet"). attr ("href", "data:text/plain;base64,RVJSOiBVbmFibGUgdG8gcGFyc2Ugc25pcHBldA==") ;
				// }, 500 ) ;
				window. open ( link, "_blank") ;
			}
		} ) ;

		// Events on file name link
		jQuery ("body"). off ("click", ".sst-cs-code-snippet-popup-header-data-filename"). on ("click", ".sst-cs-code-snippet-popup-header-data-filename", function ()
		{
			var blob = new Blob (
			[
				jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-code-container"). children (".sst-cs-code-snippet-popup-code"). children ("pre.sst-cs-code-popup-code-text"). children ("code"). html ()
			],
			{
				type: "text/plain;",
			} ) ;
			saveAs ( blob, jQuery ("#sst-cs-code-snippet-popup-container"). children (".sst-cs-code-snippet-popup-header"). children (".sst-cs-code-snippet-popup-header-data-container"). children (".sst-cs-code-snippet-popup-header-data-subline"). children (".sst-cs-code-snippet-popup-header-data-filename"). html () ) ;
		} ) ;
} ) ;
