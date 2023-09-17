(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{245:function(t,e,a){t.exports=a.p+"assets/img/lpc.bfa9cf23.png"},246:function(t,e,a){t.exports=a.p+"assets/img/pci0.4477f361.png"},305:function(t,e,a){t.exports=a.p+"assets/img/rtc-range-check.d964e9c9.png"},306:function(t,e,a){t.exports=a.p+"assets/img/rtc-name.afa4c3f4.png"},307:function(t,e,a){t.exports=a.p+"assets/img/ssdt-before-rename-hedt.4b47d5a3.png"},308:function(t,e,a){t.exports=a.p+"assets/img/ssdt-after-rename-hedt.ea1fe10e.png"},361:function(t,e,a){"use strict";a.r(e);var n=a(10),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fixing-system-clocks-on-hedt-manual"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fixing-system-clocks-on-hedt-manual"}},[t._v("#")]),t._v(" Fixing System Clocks on HEDT: Manual")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#finding-the-acpi-path"}},[t._v("Finding the ACPI path")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[t._v("Edits to the sample SSDT")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#compiling-the-ssdt"}},[t._v("Compiling the SSDT")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#wrapping-up"}},[t._v("Wrapping up")])])]),t._v(" "),e("h2",{attrs:{id:"seeing-if-you-need-ssdt-rtc0-range"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seeing-if-you-need-ssdt-rtc0-range"}},[t._v("#")]),t._v(" Seeing if you need SSDT-RTC0-RANGE")]),t._v(" "),e("p",[t._v("To start, first open your decompiled DSDT you got from "),e("RouterLink",{attrs:{to:"/Manual/dump.html"}},[t._v("Dumping the DSDT")]),t._v(" and "),e("RouterLink",{attrs:{to:"/Manual/compile.html"}},[t._v("Decompiling and Compiling")]),t._v(" with either MaciASL(if in macOS) or any other text editor if in Windows or Linux(VSCode has an "),e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACPI extension"),e("OutboundLink")],1),t._v(" that can also help).")],1),t._v(" "),e("p",[t._v("Now search for "),e("code",[t._v("PNP0B00")]),t._v(" and look at the "),e("code",[t._v("_CRS")]),t._v(" entry within it:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(305),alt:""}})]),t._v(" "),e("p",[t._v("And from the above example, we see we have 2 banks of RTC memory:")]),t._v(" "),e("ul",[e("li",[t._v("Bank 1: starts at 0x70 and is length 0x2")]),t._v(" "),e("li",[t._v("Bank 2: starts at 0x74 and is length 0x4")])]),t._v(" "),e("p",[t._v("Now the problem is that the OEM forgot to mat sections 0x72 and 0x73. Because of this, macOS may halt while booting(prominently in Big Sur)")]),t._v(" "),e("p",[t._v("And finally, verify if it has an _STA method as well. This will be used shortly")]),t._v(" "),e("h2",{attrs:{id:"finding-the-acpi-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-acpi-path"}},[t._v("#")]),t._v(" Finding the ACPI path")]),t._v(" "),e("p",[t._v("Finding the ACPI pathing is quite easy actually, first open your decompiled DSDT you got from "),e("RouterLink",{attrs:{to:"/Manual/dump.html"}},[t._v("Dumping the DSDT")]),t._v(" and "),e("RouterLink",{attrs:{to:"/Manual/compile.html"}},[t._v("Decompiling and Compiling")]),t._v(" with either MaciASL(if in macOS) or any other text editor if in Windows or Linux(VSCode has an "),e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACPI extension"),e("OutboundLink")],1),t._v(" that can also help).")],1),t._v(" "),e("p",[t._v("To start, search for the following:")]),t._v(" "),e("ul",[e("li",[t._v("Finding the RTC name:\n"),e("ul",[e("li",[t._v("Search "),e("code",[t._v("PNP0B00")])])])]),t._v(" "),e("li",[t._v("Finding the LowPinCount path:\n"),e("ul",[e("li",[t._v("Search "),e("code",[t._v("Name (_ADR, 0x001F0000)")])])])]),t._v(" "),e("li",[t._v("Finding the PCI path:\n"),e("ul",[e("li",[t._v("Search "),e("code",[t._v("PNP0A08")]),t._v(" (If multiple show up, use the first one)")])])])]),t._v(" "),e("p",[t._v("You should get something like the following show up:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("RTC Pathing")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LPC Pathing")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("PCI Pathing")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(306),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(245),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(246),alt:""}})])])])]),t._v(" "),e("p",[t._v("From the above, we can see we have "),e("code",[t._v("RTC")]),t._v(", "),e("code",[t._v("LPC0")]),t._v(" and "),e("code",[t._v("PCI0")]),t._v(". Now we can head to the next stage")]),t._v(" "),e("h2",{attrs:{id:"edits-to-the-sample-ssdt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edits-to-the-sample-ssdt"}},[t._v("#")]),t._v(" Edits to the sample SSDT")]),t._v(" "),e("p",[t._v("Now that we have our ACPI path, lets grab our SSDT and get to work:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-RTC0-RANGE.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-RTC0-RANGE.dsl"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("By default, this uses "),e("code",[t._v("PC00.LPC0.RTC")]),t._v(" for the pathing. you'll want to rename accordingly.")]),t._v(" "),e("p",[t._v("Following the example from above, we'll be renaming it to "),e("code",[t._v("PCI0.LPC0.RTC")]),t._v(":")]),t._v(" "),e("p",[e("strong",[t._v("Before")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("External (_SB_.PC00.LPC0, DeviceObj) <- Rename this\n\nExternal (_SB_.PC00.LPC0.RTC_, DeviceObj) <- Rename this\n\nScope (_SB.PC00.LPC0) <- Rename this\n")])])]),e("p",[e("img",{attrs:{src:a(307),alt:""}})]),t._v(" "),e("p",[t._v("Following the example pathing we found, the SSDT should look something like this:")]),t._v(" "),e("p",[e("strong",[t._v("After")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("External (_SB_.PCI0.LPC0, DeviceObj) <- Renamed\n\nScope (_SB.PCI0.LPC0.RTC) <- Renamed\n\nScope (_SB.PCI0.LPC0) <- Renamed\n\n\n  /* <- Remove if your RTC device didn't have an _STA\n  Scope (RTC)\n        {\n            Method (_STA, 0, NotSerialized)  // _STA: Status\n            {\n                If (_OSI (\"Darwin\"))\n                {\n                    Return (Zero)\n                }\n                Else\n                {\n                    Return (0x0F)\n                }\n            }\n        }\n  */ <- Remove if your RTC device didn't have an _STA\n")])])]),e("p",[e("img",{attrs:{src:a(308),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"compiling-the-ssdt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-ssdt"}},[t._v("#")]),t._v(" Compiling the SSDT")]),t._v(" "),e("p",[t._v("With the SSDT done, you're now "),e("RouterLink",{attrs:{to:"/Manual/compile.html"}},[t._v("ready to compile the SSDT!")])],1),t._v(" "),e("h2",{attrs:{id:"wrapping-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[t._v("#")]),t._v(" Wrapping up")]),t._v(" "),e("p",[t._v("Once you're done making your SSDT, either head to the next page to finish the rest of the SSDTs or head here if you're ready to wrap up:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/cleanup.html"}},[e("strong",[t._v("Cleanup")])])],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);