import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as s,c as l,a as e,b as t,d as n,e as a}from"./app-SRTUA6K3.js";const g={},c=e("p",null,"矿难、Win11、DDR5、40 显卡接踵而至，电脑更换的高峰期即将来临。可惜我的生产力工具等不了了，不得不 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配置完毕后，软件安装成为新的挑战。我常用的软件超过60个，以往需要逐一访问官网下载最新版本并单独安装，这既耗时又费力。",-1),d=e("p",null,[t("我尝试过国内的软件管理器，它们支持批量下载，但安装和设置仍需逐个进行。此外，把软件系统的管理交给360、金山或腾讯，你真的放心？相比之下，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，"),e("strong",null,"它们直接从官方来源下载应用，并支持一键批量静默安装，是快速部署程序的理想选择"),t("。")],-1),p=e("h2",{id:"原生程序管理-winget",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#原生程序管理-winget","aria-hidden":"true"},"#"),t(" 原生程序管理-winget")],-1),h={href:"https://docs.microsoft.com/zh-cn/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".msixbundle",-1),m={href:"https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},_=a('<p>安装应用安装程序后，可在命令提示符(cmd)中输入「winget」来运行程序命令。若要使用PowerShell命令，请注意修改PowerShell的执行策略。重要的是更改ps1文件的运行权限，而非win11自带的ps5。以管理员权限运行PowerShell，执行<code>Set-ExecutionPolicy RemoteSigned</code>命令。</p><h3 id="winget-install-appname" tabindex="-1"><a class="header-anchor" href="#winget-install-appname" aria-hidden="true">#</a> winget install appName</h3><p>执行 winget install 命令，就能完成指定程序的下载、哈希验证、静默设置安装三个步骤，不需要人工干预。</p><figure><img src="https://img.newzone.top/2022-05-05-17-13-24.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="winget-search-appname" tabindex="-1"><a class="header-anchor" href="#winget-search-appname" aria-hidden="true">#</a> winget search appName</h3><p>当未找到或不确定 appName 时，使用 winget search 可以锁定程序名称。以「飞书」为例，飞书不支持中文锁定，搜索后发现有国内版「Feishu」和海外版「Lark」两个版本，国内版使用命令 <code>winget install feishu</code>。</p><figure><img src="https://img.newzone.top/2022-05-05-17-13-45.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="winget-upgrade-all" tabindex="-1"><a class="header-anchor" href="#winget-upgrade-all" aria-hidden="true">#</a> winget upgrade --all</h3><ul><li><code>winget upgrade</code> 列出所有支持 winget 升级的程序，然后使用 <code>winget upgrade ID</code> 升级指定程序。</li><li><code>winget upgrade --all</code> 会静默升级所有支持 winget 的程序，适合更新强迫症患者。不过，该升级流程暂时没有筛选办法，无法单独剔除应用。</li><li><code>winget upgrade --all --include-unknown</code> 升级包括未知版本在内的所有应用，一般用不到，适用于强迫症患者。</li></ul><figure><img src="https://img.newzone.top/2022-05-05-17-14-00.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="microsoft-store-应用" tabindex="-1"><a class="header-anchor" href="#microsoft-store-应用" aria-hidden="true">#</a> Microsoft Store 应用</h3><p>Microsoft Store 不支持 winget 官方源，因此 winget 不能使用应用名称安装商店应用。</p><p>winget 安装 Microsoft Store 应用前，需要 <code>winget search</code> 命令找到应用 id 和来源。msstore 源指 Miscrosoft Store，其使用唯一标识符作为程序包的“Id”。因此，snipaste 安装命令为 <code>winget install 9P1WXPKB68KX -s msstore</code>。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-23.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装中会要求接受协议，点 Y 确认即可。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-35.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="批量部署程序-winstall" tabindex="-1"><a class="header-anchor" href="#批量部署程序-winstall" aria-hidden="true">#</a> 批量部署程序-winstall</h2>',17),u={href:"https://winstall.app/",target:"_blank",rel:"noopener noreferrer"},b=a('<p>操作非常简单，winstall 页面选中程序，即可打包程序组或生成批量安装命令。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-50.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>winstall 的应用搜索继承了 winget 的问题，部分国产软件不支持中文搜索，比如「坚果云」只支持英文名称「Nutstore」。希望这一问题，可以随着国内用户群增多而被解决。</p><figure><img src="https://img.newzone.top/2022-05-05-17-15-09.png?imageMogr2/format/webp" alt="winget 搜索" tabindex="0" loading="lazy"><figcaption>winget 搜索</figcaption></figure><figure><img src="https://img.newzone.top/2022-05-05-17-15-37.png?imageMogr2/format/webp" alt="winstall 搜索" tabindex="0" loading="lazy"><figcaption>winstall 搜索</figcaption></figure><p>winstall 页面选好程序后，导出自动生成的批量安装命令，并在命令提示符 (cmd) 中执行，系统将自动下载并静默配置程序。注意保存批量安装命令，winstall 网站服务并不稳定，有可能你后面想用，它却无法导出命令。</p><figure><img src="https://img.newzone.top/2022-05-05-17-15-55.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="尝试更新源时失败" tabindex="-1"><a class="header-anchor" href="#尝试更新源时失败" aria-hidden="true">#</a> 尝试更新源时失败</h3>',9),x={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},z={href:"https://newzone.top/posts/2022-02-19-microsoft_store_fixed.html#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"其他问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他问题","aria-hidden":"true"},"#"),t(" 其他问题")],-1),k=e("ul",null,[e("li",null,"批量安装应用中，winstall 不定期出现崩溃，原因未知。"),e("li",null,"winget install 不能检测当前版本软件是否安装，容易造成重复安装应用，拖慢部署时间。"),e("li",null,"部分应用安装后容易有 bug，比如剪映有卡顿问题，手动安装后恢复正常。")],-1),S=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),t(" 总结")],-1),W=e("p",null,"在我的常用软件列表中有 50 个应用支持 winget 批量静默安装，剩余 10 个需手工安装，覆盖率在 80% 以上，足够满足大部分人的需求。",-1),y=e("p",null,"winget 用一个命令行能静默安装上百个软件，节省了大量装机时间。对于系统重装、批量装机、快速设置新工作环境，winget 和 winstall 是必不可少的装机神器。",-1);function E(N,v){const i=r("ExternalLinkIcon");return s(),l("div",null,[c,d,p,e("p",null,[e("a",h,[t("winget"),n(i)]),t("是Windows的命令行程序包管理器。在Windows 10和Windows 11上，可以用winget来发现、安装、升级、删除和配置应用程序。早期版本的Windows不支持winget，需要在"),e("a",w,[t("winget官方网站"),n(i)]),t("下载以"),f,t("为后缀的安装程序。而在Win11上，则可"),e("a",m,[t("通过Microsoft Store获取应用安装程序"),n(i)]),t("。")]),_,e("p",null,[e("a",u,[t("winstall"),n(i)]),t(" 是 winget install 的网页管理工具。借助 winstall，用户不懂代码，也能轻松使用 winget，一次性安装所有应用程序。")]),b,e("p",null,[t("国内使用 winget 容易出现问题「尝试更新源时失败」，下载 "),e("a",x,[t("winget 官方最新包"),n(i)]),t("可解决问题。")]),e("p",null,[t("另一个可能是 Internet 选项的 TLS 版本设置过低，开启 TLS 1.2 即可恢复，具体操作查看 "),e("a",z,[t("Windows 应用商店 (Microsoft store) 打不开？"),n(i)]),t("。")]),M,k,S,W,y])}const P=o(g,[["render",E],["__file","2022-03-21-winget_the_strongest_software_manager_for_windows.html.vue"]]);export{P as default};
