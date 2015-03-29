/**
 * Map class
 * Initializes empty lists for regions and super regions
 */
Map = function () {

    if (false === (this instanceof Map)) {
        return new Map(arguments);
    }

    this.regions = {};
    this.superRegions = {};
};

/**
 * Map.getRegionById
 * Returns a Region instance by id or null when the region id is unknown
 * @param int id
 * @return Region || null
 */
Map.prototype.getRegionById = function (id) {

    if (this.regions.hasOwnProperty(id)) {
        return this.regions[id];
    }

    return null;
};

/**
 * Map.getSuperRegionById
 * Returns a SuperRegion instance by id or null when the region id is unknown
 * @param int id
 * @return SuperRegion || null
 */
Map.prototype.getSuperRegionById = function (id) {

    if (this.superRegions.hasOwnProperty(id)) {
        return this.superRegions[id];
    }

    return null;
};

/**
 * Map.getOwnedRegions
 * Returns an array with all regions owned by owner
 * @param String owner
 * @return Array
 */
Map.prototype.getOwnedRegions = function (owner) {

    var i,
        region,
        ownedRegions = [];

    for (i in this.regions) {

        if (this.regions.hasOwnProperty(i)) {
            region = this.regions[i];

            if (region.owner === owner) {
                ownedRegions.push(region);
            }
        }       
    }

    return ownedRegions;
};


module.exports = Map;