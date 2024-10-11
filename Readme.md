# Stock firmware for Xiaomi Mi4C router
The file were extracted from `miwifi_r4cm_all_0ab4e_2.14.500.bin`

# Firmware content
```bash
$ binwalk miwifi_r4cm_all_0ab4e_2.14.500.bin  

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
46745         0xB699          JBOOT STAG header, image id: 6, timestamp 0x18027118, image size: 4019174400 bytes, image JBOOT checksum: 0x60FF, header JBOOT checksum: 0x14
47229         0xB87D          JBOOT STAG header, image id: 16, timestamp 0x21240400, image size: 822083624 bytes, image JBOOT checksum: 0xA600, header JBOOT checksum: 0x127
55705         0xD999          JBOOT STAG header, image id: 16, timestamp 0x21100000, image size: 33554576 bytes, image JBOOT checksum: 0x0, header JBOOT checksum: 0x2110
77925         0x13065         JBOOT STAG header, image id: 6, timestamp 0xCB10, image size: 799836416 bytes, image JBOOT checksum: 0x4000, header JBOOT checksum: 0x2110
77993         0x130A9         JBOOT STAG header, image id: 6, timestamp 0x1F00CB10, image size: 554713088 bytes, image JBOOT checksum: 0xA010, header JBOOT checksum: 0xFF00
86343         0x15147         JBOOT SCH2 kernel header, compression type: none, Entry Point: 0x11000116, image size: 2415922212 bytes, data CRC: 0x85000C8F, Data Address: 0x9902188F, rootfs offset: 0x4AF288F, rootfs size: 553126182 bytes, rootfs CRC: 0xA5D7B803, header CRC: 0xBC001024, header size: 14479 bytes, cmd line length: 39171 bytes
105748        0x19D14         U-Boot version string, "U-Boot 1.1.3 (Feb  7 2023 - 05:30:27)"
106436        0x19FC4         CRC32 polynomial table, little endian
107681        0x1A4A1         DER SHA1 hash
107796        0x1A514         AES Inverse S-Box
109076        0x1AA14         AES S-Box
128392        0x1F588         uImage header, header size: 64 bytes, header CRC: 0x6A8C1B91, created: 2023-02-07 05:40:12, image size: 1459480 bytes, Data Address: 0x80000000, Entry Point: 0x80000000, data CRC: 0xC8D7E62, OS: Linux, CPU: MIPS, image type: OS Kernel Image, compression type: lzma, image name: "MIPS OpenWrt Linux-3.10.14"
128456        0x1F5C8         LZMA compressed data, properties: 0x6D, dictionary size: 8388608 bytes, uncompressed size: 4234216 bytes
1635720       0x18F588        Squashfs filesystem, little endian, version 4.0, compression:xz, size: 8731298 bytes, 2117 inodes, blocksize: 262144 bytes, created: 2023-02-07 05:40:08

```

# Getting rootfs
```bash
dd if=miwifi_r4cm_all_0ab4e_2.14.500.bin of=rootfs.sqfs bs=1 skip=1635720
```

# Extracting rootfs
```bash
unsquashfs rootfs.sqfs
```

