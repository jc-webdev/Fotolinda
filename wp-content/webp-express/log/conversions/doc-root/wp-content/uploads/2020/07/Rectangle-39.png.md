WebP Express 0.17.4. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2020-08-01 15:19:51

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.14
- Server software: Apache

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-39.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-39.png.webp
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
- source: [doc-root]/wp-content/uploads/2020/07/Rectangle-39.png
- destination: [doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-39.png.webp
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
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-39.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-39.png.webp.lossy.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-39.png.webp.lossy.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-39.png
Dimension: 180 x 270
Output:    9296 bytes Y-U-V-All-PSNR 41.76 45.24 44.63   42.58 dB
block count:  intra4: 197
              intra16: 7  (-> 3.43%)
              skipped block: 0 (0.00%)
bytes used:  header:            194  (2.1%)
             mode-partition:   1023  (11.0%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |    6276 |      82 |      63 |     109 |    6530  (70.2%)
 intra16-coeffs:  |      58 |       0 |      11 |      20 |      89  (1.0%)
  chroma coeffs:  |    1386 |       9 |      15 |      21 |    1431  (15.4%)
    macroblocks:  |      84%|       3%|       3%|       8%|     204
      quantizer:  |      15 |      11 |       8 |       8 |
   filter level:  |      10 |       2 |       2 |       4 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |    7720 |      91 |      89 |     150 |    8050  (86.6%)

Success
Reduction: 64% (went from 25 kb to 9 kb)

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
nice cwebp -metadata none -q 85 -alpha_q '85' -near_lossless 60 -m 6 -low_memory '[doc-root]/wp-content/uploads/2020/07/Rectangle-39.png' -o '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-39.png.webp.lossless.webp' 2>&1 2>&1

*Output:* 
Saving file '[doc-root]/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Rectangle-39.png.webp.lossless.webp'
File:      [doc-root]/wp-content/uploads/2020/07/Rectangle-39.png
Dimension: 180 x 270
Output:    24904 bytes
Lossless-ARGB compressed size: 24904 bytes
  * Header size: 1043 bytes, image data size: 23835
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=2
  * Palette size:   256

Success
Reduction: 4% (went from 25 kb to 24 kb)

Picking lossy
cwebp succeeded :)

Converted image in 469 ms, reducing file size with 64% (went from 25 kb to 9 kb)
