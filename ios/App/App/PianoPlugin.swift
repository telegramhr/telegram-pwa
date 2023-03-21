//
//  PianoPlugin.swift
//  Telegram.hr
//
//  Created by Marko Banusic on 07.02.2023..
//

import Foundation
import Capacitor

@objc(PianoPlugin)
public class PianoPlugin: CAPPlugin {
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }
    
    @objc func login(_ call: CAPPluginCall) {
        let url = URL(string: "https://id.piano.io/id/?response_type=code&client_id=QuTHmVhFpu&redirect_uri=capacitor://app.telegram.hr&disable_sign_up=true")!
        webView?.load(URLRequest(url: url))
    }

}
