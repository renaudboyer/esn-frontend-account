window.openpaas = {
    //AUTH_PROVIDER: 'basic'
    AUTH_PROVIDER: 'oidc',
    OPENPAAS_API_URL: 'http://backend.open-paas.org.local',
    BASE_URL: '',
    APP_BASE_HREF: '/',
    APP_GRID_ITEMS: '[{ "name": "Calendar", "url": "http://calendar.open-paas.org.local/" }, { "name": "Contacts", "url": "http://contacts.open-paas.org.local/" }, { "name": "Inbox", "url": "http://inbox.open-paas.org.local/inbox/" }]',
    AUTH_PROVIDER_SETTINGS: {
        authority: 'http://auth.open-paas.org.local/auth/realms/master',
        client_id: 'openpaas',
        redirect_uri: 'http://account.open-paas.org.local/#/auth/oidc/callback',
        silent_redirect_uri: 'http://account.open-paas.org.local/auth/silent-renew.html',
        post_logout_redirect_uri: 'http://account.open-paas.org.local/',
        response_type: 'code',
        scope: 'openid email profile'
    }
};
