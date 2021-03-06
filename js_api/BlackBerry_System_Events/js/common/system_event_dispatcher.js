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
	var MINI_BROKER_LOCATION = "blackberry/system/event";
	

	if(!this.blackberry) {
		return; //nothing to dispatch
	}
	
	if(!this.blackberry.system) {
		this.blackberry.system = {};
	}	

	
	function addEvent(eventType, onClickHandler) {
		
		var onClickHandlerId = blackberry.events.registerEventHandler("onClick", onClickHandler);
		
		var request = new blackberry.transport.RemoteFunctionCall(MINI_BROKER_LOCATION + "/" +  eventType); //don't care about the return value
		request.addParam("callback",onClickHandlerId);
		request.makeAsyncCall();
	}
	
	
	
	this.blackberry.system.event = {
		//Override the delegates for each namespace method
		dispatcher : {
			"deviceBatteryLevelChange" : function(onClickHandler) {
				addEvent("deviceBatteryLevelChange",onClickHandler);
			},
			
			"deviceBatteryStateChange" : function(onClickHandler) {
				addEvent("deviceBatteryStateChange",onClickHandler);
			}
		}
	};	
})();