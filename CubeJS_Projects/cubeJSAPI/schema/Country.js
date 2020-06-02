cube(`Country`, {
  sql: `SELECT * FROM world.country`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [localname, name]
    }
  },
  
  dimensions: {
    code: {
      sql: `${CUBE}.\`Code\``,
      type: `string`
    },
    
    code2: {
      sql: `${CUBE}.\`Code2\``,
      type: `string`
    },
    
    gnp: {
      sql: `${CUBE}.\`GNP\``,
      type: `string`
    },
    
    gnpold: {
      sql: `${CUBE}.\`GNPOld\``,
      type: `string`
    },
    
    governmentform: {
      sql: `${CUBE}.\`GovernmentForm\``,
      type: `string`
    },
    
    headofstate: {
      sql: `${CUBE}.\`HeadOfState\``,
      type: `string`
    },
    
    lifeexpectancy: {
      sql: `${CUBE}.\`LifeExpectancy\``,
      type: `string`
    },
    
    localname: {
      sql: `${CUBE}.\`LocalName\``,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}.\`Name\``,
      type: `string`
    },
    
    region: {
      sql: `${CUBE}.\`Region\``,
      type: `string`
    },
    
    surfacearea: {
      sql: `${CUBE}.\`SurfaceArea\``,
      type: `string`
    }
  }
});
