WebP Express 0.17.4. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2020-08-01 15:19:21

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.14
- Server software: Apache

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- alpha-quality: 85
- encoding: "auto"
- metadata: "none"
- near-lossless: 60
- quality: 85
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png.webp
- alpha-quality: 85
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: 85
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- auto-filter: false
- default-quality: 85
- max-quality: 85
- preset: "none"
- size-in-percentage: null (not set)
- skip: false
- rel-path-to-precompiled-binaries: *****
- try-cwebp: true
- try-discovering-cwebp: true
------------

Encoding is set to auto - converting to both lossless and lossy and selecting the smallest file

Converting to lossy
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 3 binaries: 
- /usr/sbin/cwebp
- /bin/cwebp
- /usr/bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/sbin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 0.5.2)
- /usr/sbin/cwebp: (version: 0.5.2)
- /bin/cwebp: (version: 0.5.2)
- /usr/bin/cwebp: (version: 0.5.2)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 0.5.2
Quality: 85. 
The near-lossless option ignored for lossy
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png
Dimension: 32 x 32
Output:    492 bytes Y-U-V-All-PSNR 40.11 42.70 44.27   40.96 dB
block count:  intra4: 4
              intra16: 0  (-> 0.00%)
              skipped block: 0 (0.00%)
bytes used:  header:             34  (6.9%)
             mode-partition:     25  (5.1%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |     352 |       0 |       0 |       0 |     352  (71.5%)
 intra16-coeffs:  |       0 |       0 |       0 |       0 |       0  (0.0%)
  chroma coeffs:  |      49 |       0 |       0 |       0 |      49  (10.0%)
    macroblocks:  |      100%|       0%|       0%|       0%|       4
      quantizer:  |      14 |      14 |      14 |      14 |
   filter level:  |       4 |       4 |       4 |       4 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |     401 |       0 |       0 |       0 |     401  (81.5%)

Success
Reduction: 74% (went from 1881 bytes to 492 bytes)

Converting to lossless
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 3 binaries: 
- /usr/sbin/cwebp
- /bin/cwebp
- /usr/bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/sbin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: /usr/bin/cwebp -version 2>&1. Result: version: *0.5.2*
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
- Executing: [doc-root]/wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (the user that the command was run with does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 0.5.2)
- /usr/sbin/cwebp: (version: 0.5.2)
- /bin/cwebp: (version: 0.5.2)
- /usr/bin/cwebp: (version: 0.5.2)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 0.5.2
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/07/cropped-Zrzut-ekranu-2020-07-20-o-18.01.40-32x32.png
Dimension: 32 x 32
Output:    1526 bytes
Lossless-ARGB compressed size: 1526 bytes
  * Header size: 518 bytes, image data size: 982
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=2
  * Palette size:   252

Success
Reduction: 19% (went from 1881 bytes to 1526 bytes)

Picking lossy
cwebp succeeded :)

Converted image in 391 ms, reducing file size with 74% (went from 1881 bytes to 492 bytes)
