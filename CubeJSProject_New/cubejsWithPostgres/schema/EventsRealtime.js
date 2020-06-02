cube(`EventsRealtime`, {
  sql: `SELECT * FROM public.events_realtime`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [institutionId, siteId, bookId, city, tenantId, country, userId, eventTimestamp]
    },
    
    eventCount: {
      sql: `event_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    os: {
      sql: `os`,
      type: `string`
    },
    
    eventType: {
      sql: `event_type`,
      type: `string`
    },
    
    institutionId: {
      sql: `institution_id`,
      type: `string`
    },
    
    siteId: {
      sql: `site_id`,
      type: `string`
    },
    
    bookId: {
      sql: `book_id`,
      type: `string`
    },
    
    browserVersion: {
      sql: `browser_version`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    userType: {
      sql: `user_type`,
      type: `string`
    },
    
    eventAttribute: {
      sql: `event_attribute`,
      type: `string`
    },
    
    browser: {
      sql: `browser`,
      type: `string`
    },
    
    ip: {
      sql: `ip`,
      type: `string`
    },
    
    tenantId: {
      sql: `tenant_id`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    fileFormat: {
      sql: `file_format`,
      type: `string`
    },
    
    longitude: {
      sql: `longitude`,
      type: `string`
    },
    
    userId: {
      sql: `user_id`,
      type: `string`
    },
    
    eventTimestamp: {
      sql: `event_timestamp`,
      type: `time`
    },
    
    processTime: {
      sql: `process_time`,
      type: `time`
    }
  }
});
