const ENV = {
    LCL: {
        API_SERVER: 'https://api.github.com'
    },
    DEV: {
        API_SERVER: 'https://api.github.com'
    },
    STG: {
        API_SERVER: 'https://api.github.com'
    },
    PRO: {
        API_SERVER: 'https://api.github.com'
    }
};

const config = ENV[process.env.REACT_APP_STAGE || "LCL"];

const getConfig = (name, defaultValue) => {
    return process.env[name] || config[name] || defaultValue;
};

export { getConfig };
