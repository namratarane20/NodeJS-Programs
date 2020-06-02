cube(`ReadHistoryTransactional`, {
  sql: `SELECT * FROM public.read_history_transactional`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [institutionId, profileId, tenantId, productId, userId, createdAt, updatedAt]
    },
    
    totalCount: {
      sql: `total_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    institutionId: {
      sql: `institution_id`,
      type: `string`
    },
    
    profileId: {
      sql: `profile_id`,
      type: `string`
    },
    
    tenantId: {
      sql: `tenant_id`,
      type: `string`
    },
    
    productId: {
      sql: `product_id`,
      type: `string`
    },
    
    userId: {
      sql: `user_id`,
      type: `string`
    },
    
    data: {
      sql: `data`,
      type: `string`
    },
    
    page: {
      sql: `page`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  }
});
