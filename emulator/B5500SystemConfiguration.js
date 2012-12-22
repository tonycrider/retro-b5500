/***********************************************************************
* retro-b5500/emulator B5500SystemConfiguration.js
************************************************************************
* Copyright (c) 2012, Nigel Williams and Paul Kimpel.
* Licensed under the MIT License,
*       see http://www.opensource.org/licenses/mit-license.php
************************************************************************
* B5500 System Configuration module.
*
* This is presently a static Javascript object describing the hardware
* modules and peripherals attached to the system.
************************************************************************
* 2012-06-30  P.Kimpel
*   Original version, from thin air.
***********************************************************************/
"use strict";

var B5500SystemConfiguration = {

    PA:         true,                   // Processor A available
    PB:         false,                  // Processor B available

    PB1L:       false,                  // PA is P1 (false) | PB is P1 (true)

    IO1:        true,                   // I/O Unit 1 available
    IO2:        true,                   // I/O Unit 2 available
    IO3:        false,                  // I/O Unit 3 available
    IO4:        false,                  // I/O Unit 4 available

    MemMod: [
                true,                   // Memory module 0 available (4KW)
                true,                   // Memory module 1 available (4KW)
                false,                  // Memory module 2 available (4KW)
                false,                  // Memory module 3 available (4KW)
                false,                  // Memory module 4 available (4KW)
                false,                  // Memory module 5 available (4KW)
                false,                  // Memory module 6 available (4KW)
                false],                 // Memory module 7 available (4KW)

    Units: {
        SPO:    true,                   // SPO keyboard/printer
        DKA:    false,                  // Disk File Control A
        DKB:    false,                  // Disk File Control B
        CRA:    false,                  // Card Reader A
        CRB:    false,                  // Card Reader B
        CPA:    false,                  // Card Punch A
        LPA:    false,                  // Line Printer A
        LPB:    false,                  // Line Printer B
        PRA:    false,                  // Paper Tape Reader A
        PRB:    false,                  // Paper Tape Reader B
        PPA:    false,                  // Paper Tape Punch A
        PPB:    false,                  // Paper Tape Punch A
        DCA:    false,                  // Data Communications Control A
        DRA:    false,                  // Drum/Auxmem A
        DRB:    false,                  // Drum/Auxmem B
        MTA:    false,                  // Magnetic Tape Unit A
        MTB:    false,                  // Magnetic Tape Unit B
        MTC:    false,                  // Magnetic Tape Unit C
        MTD:    false,                  // Magnetic Tape Unit D
        MTE:    false,                  // Magnetic Tape Unit E
        MTF:    false,                  // Magnetic Tape Unit F
        MTH:    false,                  // Magnetic Tape Unit H
        MTJ:    false,                  // Magnetic Tape Unit J
        MTK:    false,                  // Magnetic Tape Unit K
        MTL:    false,                  // Magnetic Tape Unit L
        MTM:    false,                  // Magnetic Tape Unit M
        MTN:    false,                  // Magnetic Tape Unit N
        MTP:    false,                  // Magnetic Tape Unit P
        MTR:    false,                  // Magnetic Tape Unit R
        MTS:    false,                  // Magnetic Tape Unit S
        MTT:    false};                 // Magnetic Tape Unit X
};
