cube(`Dummy`, {
  sql: `SELECT * FROM public.dummy`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [productId, tenantId, profileId, userId, institutionId, createdAt, updatedAt]
    },
    
    totalCount: {
      sql: `total_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    page: {
      sql: `page`,
      type: `string`
    },
    
    data: {
      sql: `data`,
      type: `string`
    },
    
    productId: {
      sql: `product_id`,
      type: `string`
    },
    
    tenantId: {
      sql: `tenant_id`,
      type: `string`
    },
    
    profileId: {
      sql: `profile_id`,
      type: `string`
    },
    
    userId: {
      sql: `user_id`,
      type: `string`
    },
    
    institutionId: {
      sql: `institution_id`,
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
