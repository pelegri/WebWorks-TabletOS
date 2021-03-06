/*
 * Copyright 2010 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
	//We will not attach ourselves if the blackberry namespace doesn't exist
	if(!this.blackberry) {
		return;
	}
	
	var bb = this.blackberry;
	var disp = this.blackberry.app.dispatcher;
	var oldApp = this.blackberry.app;
	
	bb.app = {
		
		/*
		 * This function will cause the application to exit.
		 */
		exit : disp.exit,
		
	};
	
	/*
	 * Getters for read-only properties
	 */
	bb.app.__defineGetter__("author", disp.author);
	bb.app.__defineGetter__("authorEmail", disp.authorEmail);
	bb.app.__defineGetter__("authorURL", disp.authorURL);
	bb.app.__defineGetter__("copyright", disp.copyright);
	bb.app.__defineGetter__("description", disp.description);
	bb.app.__defineGetter__("id", disp.id);
	bb.app.__defineGetter__("license", disp.license);
	bb.app.__defineGetter__("licenseURL", disp.licenseURL);
	bb.app.__defineGetter__("name", disp.name);
	bb.app.__defineGetter__("version", disp.version);
	
	if(oldApp) {
		this.blackberry.app.event = oldApp.event;
	}
})();
