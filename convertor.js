module.exports=
{
    convertToBinary: function(num)
    {
        let result = "";
        while(num>=1)
        {

            result = result.replace(/^/,num%2)

            num=Math.floor(num/2);


        }

        return result;
    },
    convertToHex: function (num)
    {
        let result ="";
        while(num>=1)
        {
            let remainder = num%16;
            switch(remainder)
            {
                case 10:
                        result = result.replace(/^/,"A")
                break;
                case 11:
                        result = result.replace(/^/,"B")
                break;
                case 12:
                        result = result.replace(/^/,"C")
                break;
                case 13:
                        result = result.replace(/^/,"D")
                break;
                case 14:
                        result = result.replace(/^/,"E")
                break;
                case 15:
                        result = result.replace(/^/,"F")
                break;
                default:
                        result = result.replace(/^/,remainder)
                break;
            }

            num=Math.floor(num/16);


        }
        return result;
    }
}