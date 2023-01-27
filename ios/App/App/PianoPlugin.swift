//
//  PianoPlugin.swift
//  Telegram.hr
//
//  Created by Marko Banusic on 27.01.2023..
//

import Foundation
import Capacitor
import PianoOAuth

@objc(PianoPlugin)
public class Pianolugin: CAPPlugin {
    @objc func login(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }
}
