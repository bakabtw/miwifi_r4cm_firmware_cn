# Stock firmware for Xiaomi Mi4C router
The file were extracted from `miwifi_r4cm_firmware_cb838_2.14.80.bin`

# Firmware content
```bash
$ binwalk miwifi_r4cm_firmware_cb838_2.14.80.bin

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
676           0x2A4           uImage header, header size: 64 bytes, header CRC: 0xCA74CB75, created: 2019-04-23 07:23:35, image size: 1459771 bytes, Data Address: 0x80000000, Entry Point: 0x80000000, data CRC: 0x5AD0A4C3, OS: Linux, CPU: MIPS, image type: OS Kernel Image, compression type: lzma, image name: "MIPS OpenWrt Linux-3.10.14"
740           0x2E4           LZMA compressed data, properties: 0x6D, dictionary size: 8388608 bytes, uncompressed size: 4234216 bytes
1508004       0x1702A4        Squashfs filesystem, little endian, version 4.0, compression:xz, size: 8730342 bytes, 2116 inodes, blocksize: 262144 bytes, created: 2019-04-23 07:23:32


```

# Getting rootfs
```bash
dd if=miwifi_r4cm_firmware_cb838_2.14.80.bin of=rootfs.sqfs bs=1 skip=1508004
```

# Extracting rootfs
```bash
unsquashfs rootfs.sqfs
```

