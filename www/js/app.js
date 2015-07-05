/**
 * Created by hasta on 02/07/15.
 */
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        console.log("App Init");
        this.bindEvents();
    },
   
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
           
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        
    },
    receivedEvent: function (id) {
        var networkState = checkConnection();

        /* load local files if there is not network connection */
        if (networkState == Connection.NONE) {
            navigator.notification.alert('This app requires an internet connection');
        } else {
            //window.open('http://talk.build', '_blank');
            var url = "http://talk.build";
            var ref = window.open(url, '_system',
            'location=no,hidden=yes,toolbar=no,enableViewportScale=yes,transitionstyle=crossdissolve');
            ref.addEventListener('loadstop', function (event) {
                ref.show();
            });
        }

    }
   
   
};

function checkConnection() {
    navigator.notification.alert('Checking connection');
    var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';

    return networkState;
};

app.initialize();