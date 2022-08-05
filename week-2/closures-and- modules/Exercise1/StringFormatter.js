const StringFormatter = function () {

    const capitalizeFirst = function (string) {
        return string.charAt(0).toUpperCase().concat(str.slice(1))
    }

    const skewerCase = function (str) {
        return str.replace(" ", "-");
    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }

}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy")
formatter.skewerCase("blue box")