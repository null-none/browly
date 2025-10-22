import "./scss/style.scss";
import './jquery-2.1.4.min'
import './dropdown'

const MOCK_DATA = [
    { name: "mac",     version: "15",    text: "macOS 15 Sequoia",           icon: "/images/os-icons/macos-15.png" },
    { name: "mac",     version: "14",    text: "macOS 14 Sonoma",            icon: "/images/os-icons/macos-14.png" },
    { name: "mac",     version: "13",    text: "macOS 13 Ventura",           icon: "/images/os-icons/macos-13.png" },
    { name: "mac",     version: "12",    text: "macOS 12 Monterey",          icon: "/images/os-icons/macos-12.png" },
    { name: "win",     version: "11",    text: "Windows 11",              icon: "/images/os-icons/windows-11.png" },
    { name: "win",     version: "10",    text: "Windows 10",              icon: "/images/os-icons/windows-10.png", selected: true },
    { name: "win",     version: "8.1",   text: "Windows 8.1",             icon: "/images/os-icons/windows-81.png" },
    { name: "win",     version: "8",     text: "Windows 8",               icon: "/images/os-icons/windows-8.png" },
    { name: "win",     version: "7",     text: "Windows 7",               icon: "/images/os-icons/windows-7.png" },
    { name: "win",     version: "vista", text: "Windows Vista",           icon: "/images/os-icons/windows-vista.png" },
    { name: "win",     version: "xp",    text: "Windows XP",              icon: "/images/os-icons/windows-xp.png" },
]

var browserDropdown = new Dropdown({
    width: 200,
    height: 45,
    iconWidth: 20,
    iconHeight: 20,
    data: MOCK_DATA
});

$(".browser").append(browserDropdown.create());

