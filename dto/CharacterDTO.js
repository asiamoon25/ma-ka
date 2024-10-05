class CharacterDTO {
    constructor(character_name, world_name, character_gender, character_class, character_class_level, character_level, character_exp, character_exp_rate, character_guild_name, character_image, popularity, final_stat, remain_ap) {
         this._character_name = character_name;
         this._world_name = world_name;
         this._character_gender = character_gender;
         this._character_class = character_class;
         this._character_class_level = character_class_level;
         this._character_level = character_level;
         this._character_exp = character_exp;
         this._character_exp_rate = character_exp_rate;
         this._character_guild_name = character_guild_name;
         this._character_image = character_image;
         this._popularity = popularity;
         this._remain_ap = remain_ap;
         this._final_stat = Array.isArray(final_stat) ? final_stat : [];
    }

    get character_name() {
        return  this._character_name;
    }

    get world_name() {
        return  this._world_name;
    }

    get character_gender() {
        return  this._character_gender;
    }

    get character_class() {
        return  this._character_class;
    }

    get character_class_level() {
        return  this._character_class_level;
    }

    get character_exp() {
        return  this._character_exp;
    }

    get character_exp_rate() {
        return  this._character_exp_rate;
    }

    get character_guild_name() {
        return  this._character_guild_name;
    }

    get character_image() {
        return  this._character_image;
    }

    get popularity() {
        return  this._popularity;
    }

    get remain_ap() {
        return  this._remain_ap;
    }

    get character_level() {
        return  this._character_level;
    }

    get final_stat() {
        return  this._final_stat;
    }

    toJSON() {
        return {
            character_name:  this._character_name,
            world_name:  this._world_name,
            character_gender:  this._character_gender,
            character_class:  this._character_class,
            character_class_level:  this._character_class_level,
            character_level :  this._character_level,
            character_exp:  this._character_exp,
            character_exp_rate:  this._character_exp_rate,
            character_guild_name:  this._character_guild_name,
            character_image:  this._character_image,
            popularity :  this._popularity,
            remain_ap :  this._remain_ap,
            final_stat :  this._final_stat
        }
    }

}

module.exports = CharacterDTO;