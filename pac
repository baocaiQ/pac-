function FindProxyForURL(url, host) {
  // 如果是中国IP，则直接连接
  if (isInNet(host, "0.0.0.0", "255.0.0.0") ||
      isInNet(host, "10.0.0.0", "10.255.255.255") ||
      isInNet(host, "100.64.0.0", "100.127.255.255") ||
      isInNet(host, "169.254.0.0", "169.254.255.255") ||
      isInNet(host, "172.16.0.0", "172.31.255.255") ||
      isInNet(host, "192.0.0.0", "192.0.0.255") ||
      isInNet(host, "192.0.2.0", "192.0.2.255") ||
      isInNet(host, "192.88.99.0", "192.88.99.255") ||
      isInNet(host, "192.168.0.0", "192.168.255.255") ||
      isInNet(host, "198.18.0.0", "198.19.255.255") ||
      isInNet(host, "198.51.100.0", "198.51.100.255") ||
      isInNet(host, "203.0.113.0", "203.0.113.255") ||
      isInNet(host, "224.0.0.0", "239.255.255.255")) {
    return "DIRECT";
  }
  // 其他网站通过代理服务器连接
  else {
    return "PROXY 192.168.0.106:5200";
  }
}
