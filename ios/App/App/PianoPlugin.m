//
//  PianoPlugin.m
//  Telegram.hr
//
//  Created by Marko Banusic on 27.01.2023..
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(PianoPlugin, "Piano",
    CAP_PLUGIN_METHOD(login, CAPPluginReturnPromise);
)
