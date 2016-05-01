# ReactNative Playground

Current ReactNative version: 0.24.1.

Right now there is no easy way to make quick ReactNative experiments. Everytime `react-native init` runs it installs ReactNative all over again.

This package provides a ReactNative container app (similar to rnplay.org) that you can use to run adhoc experiments without having to create new ReactNative projects.

# Install

```
npm install -g rnplay
```

# Running The Packager

In any directory that contains `index.ios.js` and `index.android.js`, start the packager:

```
$ rnplay packager
```

Try downloading the JavaScript bundle with curl:

```
$ curl localhost:8081/index.ios.bundle
__DEV__=true;

global.__BUNDLE_START_TIME__=Date.now();
})(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
(function(global) {var
modules=Object.create(null);
var inGuard=false;

function define(id,factory){
modules[id]={
...
```

Note: Port 8081 is hardwired in a few places within ReactNative. Not easy to change, sorry.

# Launch RNPlay Container App

You only need to launch the container app once. If you want to do another experiment, navigate to another directory and restart the packager server.

## iOS App

Launch the RNPlay App in an iOS simulator:

```
# Default to 'iPhone 6 Plus'
$ rnplay ios
```

You can switch to a different simulator

```
# Default to 'iPhone 6'
$ rnplay ios 'iPhone 6'
```

List the iOS devices you have:

```
$ xcrun simctl list devices
== Devices ==
-- iOS 9.3 --
    iPhone 4s (7B7C268D-C4BE-4624-92D8-1CAC83E12831) (Shutdown)
    iPhone 5 (8C2125C6-83B1-4AEE-A689-E8984BC79D19) (Shutdown)
    iPhone 5s (7A03D71A-71BD-4883-8674-FF156ADF48CC) (Shutdown)
    iPhone 6 (F7C9B7B0-B64F-4CF9-9E32-74B496F1266E) (Booted)
    iPhone 6 Plus (7664A1CC-3277-4499-B338-C5145258B510) (Shutdown)
    iPhone 6s (EEA520B8-A95D-4392-A741-684676A59060) (Shutdown)
    iPhone 6s Plus (DE20015B-2B4A-4DC0-A50F-7CE9EF1C58E6) (Shutdown)
    iPad 2 (BAFEA719-E78A-4358-A039-4DC9C153B28D) (Shutdown)
    iPad Retina (353CA1B6-942C-4905-B04F-0EC0C6DE8909) (Shutdown)
    iPad Air (2B0E3469-ADF6-4326-B374-664105DA0425) (Shutdown)
    iPad Air 2 (A7E8B340-1F6A-4764-B01B-91131E6E633A) (Shutdown)
    iPad Pro (3D6BD8E7-D56F-409E-8755-43D2D305F0A1) (Shutdown)
-- tvOS 9.2 --
    Apple TV 1080p (4BF723FD-BD92-451C-85B7-6F52B976B404) (Shutdown)
-- watchOS 2.2 --
    Apple Watch - 38mm (A748FA72-5DD5-416B-B037-AB8CB35F9D01) (Shutdown)
    Apple Watch - 42mm (18C5D269-0FCE-4660-861F-3EBAFDA38487) (Shutdown)
-- Unavailable: com.apple.CoreSimulator.SimRuntime.iOS-9-1 --
    iPhone 4s (E5B1C0ED-D7B2-4D16-A656-EFC1105FE445) (Shutdown) (unavailable, runtime profile not found)
    iPhone 5 (204EFEC2-324D-4740-B04F-F3A24ADCB818) (Shutdown) (unavailable, runtime profile not found)
    iPhone 5s (20B51EF1-20B0-48AB-BE97-74E09863ADF6) (Shutdown) (unavailable, runtime profile not found)
    iPhone 6 (30AC3B72-25CC-45FF-9F5B-4E1FD5D0E405) (Shutdown) (unavailable, runtime profile not found)
    iPhone 6 Plus (5CE3F446-A091-45B1-867C-B7449AC6C05A) (Shutdown) (unavailable, runtime profile not found)
    iPhone 6s (315ABBA7-AC38-4935-B216-785A4E51331F) (Shutdown) (unavailable, runtime profile not found)
    iPhone 6s Plus (6E933647-417D-4116-B5B8-EC0C8B163682) (Shutdown) (unavailable, runtime profile not found)
    iPad 2 (D13159E6-3FA9-405F-AAAC-C26F528D0143) (Shutdown) (unavailable, runtime profile not found)
    iPad Retina (A857406B-6900-4296-8F6B-54CDAAFD77EE) (Shutdown) (unavailable, runtime profile not found)
    iPad Air (36441288-8212-4AC5-B3BB-7D1F315123F1) (Shutdown) (unavailable, runtime profile not found)
    iPad Air 2 (A2E3672C-9A41-4BF9-9FC2-9E96F7452F17) (Shutdown) (unavailable, runtime profile not found)
    iPad Pro (0B694E51-C953-44CB-AAA6-402823757372) (Shutdown) (unavailable, runtime profile not found)
-- Unavailable: com.apple.CoreSimulator.SimRuntime.tvOS-9-0 --
    Apple TV 1080p (0D08D065-B5F0-4A26-A2F3-8C2E0DD27F33) (Shutdown) (unavailable, runtime profile not found)
-- Unavailable: com.apple.CoreSimulator.SimRuntime.watchOS-2-0 --
    Apple Watch - 38mm (473D5E20-F729-4628-9062-9C7907DD8F3E) (Shutdown) (unavailable, runtime profile not found)
    Apple Watch - 42mm (69DB47DF-5AF0-49FD-9CEC-670CBE26ABB4) (Shutdown) (unavailable, runtime profile not found)
```

## Android App

Invoke Gradle to build and deploy the app:

```
$ rnplay android
```

You'll need to start an Android device on your own, so Gradle can install the app onto it. Use [Genymotion](https://www.genymotion.com/)