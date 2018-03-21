
前言：顾名思义 React-native-device-info 本第三方就是为了 获取设备信息。

实际上react-native有很多类似第三方，并且使用方式和本例大体相同。作为示例记录下，供有需要的同学学习：

####1，初始化项目：

初始化一个 react-Native项目：命令：

```
win+R // 进入命令行

cd desktop //进入桌面

react-Native  init deviceInfoDemo // 初始化  react-native 项目:

cd deviceInfoDemo //进入项目 根目录

yarn install // 或者 npm install 

```

项目初始化 完成。

####2，  打开模拟器。

使用如下 emulator命令（前提已经配置好 环境变量）：

```

emulator -list-avds // 该命令用于查看  当前计算机下存在的安卓模拟器 

emulator -avd vm_name //修改 vm_name 为你当前计算机 中模拟器名称  打开模拟器。

```

或者  打开 AndroidStudio  工具 ，打开sdk manager  打开模拟器。

启动模拟器后你可以运行  react-native run-android   命令。模拟器会出现我们初始化的项目界面：

![这里写图片描述](//img-blog.csdn.net/20180321150951801?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L3UwMTMyMzMwOTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


#### 3， 安装  和链接 device-Info:

进入项目  根目录 执行命令 

#####安装  react-native-device-info

```
//Using npm:
npm install --save react-native-device-info

//or using yarn:
yarn add react-native-device-info
```

别忘了检查是否安装成功。


#####自动链接：
执行命令：
```
//shell
react-native link react-native-device-info


//(or using [`rnpm`](https://github.com/rnpm/rnpm) for versions of React Native < 0.27) 
rnpm link react-native-device-info

```

#####手动链接：

<details>
    <summary>Android 手动链接</summary>

* 打开   `android/build.gradle`:

```gradle
...
  ext {
    // dependency versions
    googlePlayServicesVersion = "<Your Services Version>"
  }
...
```

* 进入   `android/app/build.gradle`:  添加 device-info 依赖

```diff
dependencies {
    ...
    compile "com.facebook.react:react-native:+"  // From node_modules
+   compile project(':react-native-device-info')
}
```

* 进入 `android/settings.gradle`:  指定 device-info 目录

```diff
...
include ':app'
+ include ':react-native-device-info'
+ project(':react-native-device-info').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-device-info/android')
```

#### 对于  React Native 0.29+  还需：

* 进入 `MainApplication.java`:

```diff
+ import com.learnium.RNDeviceInfo.RNDeviceInfo;

  public class MainApplication extends Application implements ReactApplication {
    //......

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
+         new RNDeviceInfo(),  //添加 此行
          new MainReactPackage()
      );
    }

    ......
  }
```

#### 对于低版本  React Native:

* 进入 `MainActivity.java`:  主界面

```diff
+ import com.learnium.RNDeviceInfo.RNDeviceInfo;

  public class MainActivity extends ReactActivity {
    ......

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
+       new RNDeviceInfo(),  //添加  moudle
        new MainReactPackage()
      );
    }
  }
```

其他 平台不在赘述。 读者可参考 文末官方地址链接。

</details>


#### 贴上    device-info的  部分API方法：

## API

| 方法| 返回值类型     |  iOS | Android | Windows | Since  |
| ------------------------------------------------- | ------------------- | :--: | :-----: | :-----: | ------ |
| [getAPILevel()](#getapilevel)   //获取应用程序api版本                  | `number`            |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getApplicationName()](#getapplicationname) //获取 应用名称     | `string`            |  ✅  |   ✅    |   ✅    | 0.14.0 |
| [getBrand()](#getbrand) // 获取厂家                         | `string`            |  ✅  |   ✅    |   ✅    | 0.9.3  |
| [getBuildNumber()](#getbuildnumber) // 获取 应用编译版本号              | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getBundleId()](#getbundleid)   //获取应用程序包标识符                  | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getCarrier()](#getcarrier) // 获取运行商名称                      | `string`            |  ✅  |   ✅    |   ❌    | 0.13.0 |
| [getDeviceCountry()](#getdevicecountry) // 根据区域设置信息获取设备国家。        | `string`            |  ✅  |   ✅    |   ✅    | 0.9.0  |
| [getDeviceId()](#getdeviceid)   // 获取设备 id                 | `string`            |  ✅  |   ✅    |   ✅    | 0.5.0  |
| [getDeviceLocale()](#getdevicelocale) //获取设备的地区           | `string`            |  ✅  |   ✅    |   ✅    | 0.7.0  |
| [getDeviceName()](#getdevicename) //获取设备名称              | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getFirstInstallTime()](#getfirstinstalltime) //获取应用程序第一次安装的时间，以毫秒为单位。     | `number`            |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getFontScale()](#getfontscale)  //获取设备字体大小。               | `number`            |  ✅  |   ✅    |   ❌    | 0.15.0 |
| [getFreeDiskStorage()](#getfreediskstorage)//获取可用存储大小，以字节为单位。       | `number`            |  ✅  |   ✅    |   ❌    | 0.15.0 |
| [getIPAddress()](#getipaddress) //获取设备 当前网络地址                 | `Promise<string>`   |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getInstanceID()](#getinstanceid) //获取应用程序实例ID。                | `string`            |  ❌  |   ✅    |   ❌    | ?      |
| [getLastUpdateTime()](#getlastupdatetime) //获取应用程序上次更新的时间，以毫秒为单位。         | `number`            |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getMACAddress()](#getmacaddress) //获取网络适配器MAC地址。               | `Promise<string>`   |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getManufacturer()](#getmanufacturer) //获取设备制造商。            | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getMaxMemory()](#getmaxmemory) //返回JVM试图使用的最大内存量，以字节为单位。                 | `number`            |  ❌  |   ✅    |   ❌    | 0.14.0 |
| [getModel()](#getmodel) // 获取设备模式                          | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getPhoneNumber()](#getphonenumber) //获取电话号码              | `string`            |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getReadableVersion()](#getreadableversion)//取应用程序可读的版本。       | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getSerialNumber()](#getserialnumber) //获取序列号            | `string`            |  ❌  |   ✅    |   ❌    | 0.12.0 |
| [getSystemName()](#getsystemname) //获取系统名称                | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getSystemVersion()](#getsystemversion) //获取系统版本         | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getTimezone()](#gettimezone)  // 获取时区                   | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getTotalDiskCapacity()](#gettotaldiskcapacity)//获取完整磁盘存储大小，以字节为单位。   | `number`            |  ✅  |   ✅    |   ❌    | 0.15.0 |
| [getTotalMemory()](#gettotalmemory) //获取设备总内存，以字节为单位。             | `number`            |  ✅  |   ✅    |   ❌    | 0.14.0 |
| [getUniqueID()](#getuniqueid) //获取设备唯一的ID                     | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [getUserAgent()](#getuseragent) //获取设备用户代理                  | `string`            |  ✅  |   ✅    |   ❌    | 0.7.0  |
| [getVersion()](#getversion) // 获取 版本                     | `string`            |  ✅  |   ✅    |   ✅    | ?      |
| [is24Hour()](#is24hour) //告诉用户偏好是否设置为24小时格式                           | `boolean`           |  ✅  |   ✅    |   ✅    | 0.13.0 |
| [isEmulator()](#isemulator)  //告诉应用程序是否运行在模拟器中                     | `boolean`           |  ✅  |   ✅    |   ✅    | ?      |
| [isPinOrFingerprintSet()](#ispinorfingerprintset)//告知设备是否设置了PIN号码或指纹 | (callback)`boolean` |  ✅  |   ✅    |   ❌    | 0.10.1 |
| [isTablet()](#istablet) //告知设备是否是平板电脑                          | `boolean`           |  ✅  |   ✅    |   ✅    | ?      |


####  以下 为博主虚拟机  获取到的信息 硬件信息：

![这里写图片描述](//img-blog.csdn.net/20180321164935568?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L3UwMTMyMzMwOTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


代码地址：GitHub：

https://github.com/zqHero/deviceInfoDemo

csdN:
http://blog.csdn.net/u013233097/article/details/79642509


官方地址请看：
https://www.npmjs.com/package/react-native-device-info
