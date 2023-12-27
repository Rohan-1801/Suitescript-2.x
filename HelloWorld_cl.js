// make the code for hello world alert using clientscript in  suitescript 2.x
/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */
define(['N/ui/dialog'],
function(dialog)
{
    function Helloword()
    {
        var options={
            title: 'Hello World',
            message:"Hello Wel-come"
        }
        try
        {
            dialog.alert(options)
            log.debug({
                title:'Success',
                message:'Alert Display successfually'
            });
        } catch(e)
        {
            log.error({
                title :e.name,
                details:e.message
            });
        }
    }
    return{
        pageInit:Helloword
    };
}
 );
