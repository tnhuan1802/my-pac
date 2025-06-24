// ================Bosch PAC File =================================================
var Pri_Proxy="rb-proxy-apac.bosch.com:8080";
var Sec_Proxy="rb-proxy-de.bosch.com:8080";

function FindProxyForURL(url, host)
{
urllower = url.toLowerCase();
if (isPlainHostName(host)                       ||
//Global Exceptions
 shExpMatch(host, "127.0.0.*")	||
 shExpMatch(host, "anything")	||
 shExpMatch(host, "10.*")	||
 shExpMatch(host, "192.168.*")	||
 shExpMatch(host, "*.tailscale.com") || // Exclude Tailscale domains
 shExpMatch(host, "100.88.48.125") || // Exclude specific IP
 shExpMatch(host, "172.16.*")	||
 shExpMatch(host, "172.22.11.*")	||
 shExpMatch(host, "177.11.252.*")	||
 shExpMatch(host, "fe80::*")	||
 shExpMatch(host, "localhost")	||
 shExpMatch(host, "deliveryplatform.autodesk.com")	||
 shExpMatch(host, "*.etasgroup.com")	||
 shExpMatch(host, "*.intranet.escrypt.com")	||
 shExpMatch(host, "*.de.bosch.com")	||
 shExpMatch(host, "*.emea.bosch.com")	||
 shExpMatch(host, "*.apac.bosch.com")	||
 shExpMatch(host, "*.us.bosch.com")	||
 shExpMatch(host, "*.sap.bosch.com")	||
 shExpMatch(host, "autodiscover*.bosch.com")	||
 shExpMatch(host, "dialin.bosch.com")	||
 shExpMatch(host, "dialin.ucc-service.com")	||
 shExpMatch(host, "meet.bosch.com")	||
 shExpMatch(host, "meet.ucc-service.com")	||
 shExpMatch(host, "lyncdiscoverInternal.bosch.com")	||
 shExpMatch(host, "lyncdiscoverInternal.ucc-service.com")	||
 shExpMatch(host, "lyncdiscover.bosch.com")	||
 shExpMatch(host, "lyncdiscover.ucc-service.com")	||
 shExpMatch(host, "*.s2.lan")	||
 shExpMatch(host, "tcc.bsh-partner.com")	||
 shExpMatch(host, "tcci.bsh-partner.com")	||
 shExpMatch(host, "lyncdiscoverinternal.*")	||
 shExpMatch(host, "lyncdiscover.bshg.com")	||
 shExpMatch(host, "*.net-mgmt.bosch.com")	||
 shExpMatch(host, "*cn1.redswoosh.akadns.net")	||
 shExpMatch(host, "insights.notes.microsoft.com")	||
 shExpMatch(host, "*.sg.lan")	||
 shExpMatch(host, "*.sc.lan")	||
 shExpMatch(host, "*.lp.lan")	||
 shExpMatch(host, "*.vh.lan ")	||
 shExpMatch(host, "*.patec.group")	||
 shExpMatch(host, "pancake.apple.com")	||
 shExpMatch(host, "sylvan.apple.com")	||
 shExpMatch(host, "*.test")	||
 shExpMatch(host, "*.example")	||
 shExpMatch(host, "*.invalid")	||
 shExpMatch(host, "password-server.oauth")	||
 shExpMatch(host, "my.imanlocal.com")	||
 shExpMatch(host, "sqm.microsoft.com")	||
 shExpMatch(host, "*.localhost")	||
 shExpMatch(host, "*.inside.bosch.cloud")	||
 shExpMatch(host, "*.knime.bosch.cloud")	||

//O365 Exceptions
 shExpMatch(host, "*.afd-k.office.com")	||
 shExpMatch(host, "*.lync.com")	||
 shExpMatch(host, "*.ms-acdc.office.com")	||
 shExpMatch(host, "*.substrate.ms-acdc.office.com")	||
 shExpMatch(host, "*.substrate.office.com")	||
 shExpMatch(host, "*.teams.microsoft.com")	||
 shExpMatch(host, "bosch-my.sharepoint.com")	||
 shExpMatch(host, "bosch.sharepoint.com")	||
 shExpMatch(host, "devbosch-my.sharepoint.com")	||
 shExpMatch(host, "devbosch.sharepoint.com")	||
 shExpMatch(host, "outlook.ha.office365.com")	||
 shExpMatch(host, "outlook.office.com")	||
 shExpMatch(host, "outlook.office365.com")	||
 shExpMatch(host, "outlook.cloud.microsoft")	||
 shExpMatch(host, "teams.microsoft.com")	||
 shExpMatch(host, "teams.office.com")	||
 shExpMatch(host, "testbosch-my.sharepoint.com")	||
 shExpMatch(host, "testbosch.sharepoint.com")	||

//Local Exceptions
 
//Default Exceptions
 urllower.substring(0,5)=="rtsp:"               ||
 urllower.substring(0,6)=="rtspt:"              ||
 urllower.substring(0,6)=="rtspu:"              ||
 urllower.substring(0,4)=="mms:"                ||
 urllower.substring(0,5)=="mmst:"               ||
 urllower.substring(0,5)=="mmsu:") {
 return "DIRECT"; }
 if (shExpMatch(host,"*.bosch.com")             ||
	shExpMatch(host, "172.*")       			||
	shExpMatch(host, "100.*")       			||
    shExpMatch(host, "*.bosch-org.com")         ||
    shExpMatch(host, "*.zf-lenksysteme.net")    ||
    shExpMatch(host, "*.bshg.com")              ||
	shExpMatch(host, "*.internal.bosch.cloud")  ||
	shExpMatch(host, "*.local")                 ||
	shExpMatch(host, "*.rbesz01.com")           ||
	shExpMatch(host, "*.sharedoconline.com")    ||
	shExpMatch(host, "*.account-servicesonline.com") ||
    shExpMatch(host, "*.bosch-si.com")          ||
    shExpMatch(host, "*.boschrexroth.com")      ||
	shExpMatch(host, "*.boschrexroth.de")       ||
	shExpMatch(host, "*.pvt.bosch-ci.splunkcloud.com")       ||
    shExpMatch(host, "*.rexrothpneumatics.com") )  {
        if (	(isInNet(host, "10.0.0.0", "255.0.0.0"))	||
                (isInNet(host, "100.64.0.0", "255.192.0.0"))	||
				(isInNet(host, "172.16.0.0", "255.240.0.0"))	||
				(isInNet(host, "145.0.0.0", "255.0.0.0"))   ){
				return "DIRECT; PROXY " + Pri_Proxy +"; PROXY "  + Sec_Proxy +"; DIRECT"; 
			}
        }
 return "PROXY " + Pri_Proxy +"; PROXY " + Sec_Proxy +"; DIRECT";  
}

