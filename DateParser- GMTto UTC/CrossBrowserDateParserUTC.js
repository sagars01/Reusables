
        function dateFormatter(modelObj, timeObj) {
            var formattedDate = combineDateAndTime(modelObj, timeObj);
            var utcDateTime = formattedDate.toUTCString();
            var formatUTC = getUtcCompleteFormat(utcDateTime);
            //console.log("Format UTCDATETIME " + utcDateTime);
            //console.log("Format UTC  " + formatUTC);
            //console.log("Formatted Level 1" + formattedDate);
            //console.log("Formatted Level Param 1 " + modelObj);
            //console.log("Formatted Level Param 2 " + timeObj);
            return formatUTC;
        };
        function getDateOnly(ref) {
            var dd = ref.slice(4, 7).trim();
            var mmTemp = ref.slice(7, 11).trim();
            var mm = ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmTemp) / 3) + 1;
            var yyyy = ref.slice(11, 16).trim();
            var utcDateOnly = mm + "-" + dd + "-" + yyyy;
            return utcDateOnly;
        };
        function getTimeOnly(ref) {
            var hh_mm = ref.slice(17, 22).trim();
            return hh_mm;
        };
        function getUtcCompleteFormat(ref) {
            var dd = ref.slice(4, 7).trim();
            var mmTemp = ref.slice(7, 11).trim();
            var mm = ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmTemp) / 3) + 1;
            var yyyy = ref.slice(11, 16).trim();
            var hh_mm = ref.slice(17, 22).trim();
            var utcFormattedTime = mm + "-" + dd + "-" + yyyy + " " + hh_mm;
            return utcFormattedTime;
        };
        function combineDateAndTime(date, time) {
            var timeString = time.getHours() + ':' + time.getMinutes();
            var year = date.getFullYear();
            var month = date.getMonth() + 1; // Jan is 0, dec is 11
            var day = date.getDate();
            var dateString = month + '-' + day + '-' + year;
            var combined = new Date(dateString + ' ' + timeString);
            //console.log("Combined Date and Time Param 1 " + date);
            //console.log("Combined Date and Time Param 2 " + time);
            //console.log("Combined Date and Time timeString " + timeString);
            //console.log("Combined Date and Time YEAR " + year);
            //console.log("Combined Date and Time month " + month);
            //console.log("Combined Date and Time day " + day);
            //console.log("Combined Date and Time DateString " + dateString);
            //console.log("Combined Date and Time Combined " + combined);

            return combined;
        };