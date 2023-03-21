//
//  PianoPlugin.m
//  Telegram.hr
//
//  Created by Marko Banusic on 07.02.2023..
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(PianoPlugin, "Piano",
    CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(login, CAPPluginReturnPromise);
)
