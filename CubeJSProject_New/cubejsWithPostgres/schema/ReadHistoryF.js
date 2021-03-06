cube(`ReadHistoryF`, {
  sql: `SELECT * FROM public.read_history_f`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      sql: `count`,
      type: `sum`
    }
  },
  
  dimensions: {
    page: {
      sql: `page`,
      type: `string`
    },
    
    storeId: {
      sql: `store_id`,
      type: `string`
    },
    
    deviceLocaleCode: {
      sql: `device_locale_code`,
      type: `string`
    },
    
    sessionId: {
      sql: `session_id`,
      type: `string`
    },
    
    deviceMake: {
      sql: `device_make`,
      type: `string`
    },
    
    tenantId: {
      sql: `tenant_id`,
      type: `string`
    },
    
    lastReadPage: {
      sql: `last_read_page`,
      type: `string`
    },
    
    bookReadStatus: {
      sql: `book_read_status`,
      type: `string`
    },
    
    devicePlatform: {
      sql: `device_platform`,
      type: `string`
    },
    
    appVersion: {
      sql: `app_version`,
      type: `string`
    },
    
    productId: {
      sql: `product_id`,
      type: `string`
    },
    
    deviceType: {
      sql: `device_type`,
      type: `string`
    },
    
    institutionId: {
      sql: `institution_id`,
      type: `string`
    },
    
    userId: {
      sql: `user_id`,
      type: `string`
    },
    
    sourceType: {
      sql: `source_type`,
      type: `string`
    },
    
    fileFormat: {
      sql: `file_format`,
      type: `string`
    },
    
    bookReadProgress: {
      sql: `book_read_progress`,
      type: `string`
    },
    
    profileId: {
      sql: `profile_id`,
      type: `string`
    },
    
    deviceModel: {
      sql: `device_model`,
      type: `string`
    },
    
    processTime: {
      sql: `process_time`,
      type: `time`
    },
    
    eventTimestamp: {
      sql: `event_timestamp`,
      type: `time`
    },
    
    lastActivityTime: {
      sql: `last_activity_time`,
      type: `time`
    }
  }
});
