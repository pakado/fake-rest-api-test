/**
 * Created by pkdo10 on 12/10/2016.
 */
module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        posts:_.times(100, function(n){
            return{
                id: n,
                name: faker.name.findName(),
                avter: faker.internet.avatar()
            }
        })
    }
}