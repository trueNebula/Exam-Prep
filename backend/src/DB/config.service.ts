import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }){}

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        
        if(!value && throwOnMissing)
            throw new Error(`Config Error - missing env.${key}`);
        
        return value;

    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;

    }

    public getPort() {
        return this.getValue('DATABASE_PORT', true);

    }
    
    public getConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.getValue('DATABASE_HOST'),
            port: parseInt(this.getPort()),
            username: this.getValue('DATABASE_USER'),
            password: this.getValue('DATABASE_PASSWORD'),
            database: this.getValue('DATABASE_DB'),

            entities: [__dirname + '/../**/*.entity.{js,ts}'],

            migrationsTableName: 'migration',

            migrations: ['src/migration/*.ts'],

            synchronize: true,
            logging: true,

        }

    }
    
    public getTestConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.getValue('DATABASE_HOST'),
            port: parseInt(this.getPort()),
            username: this.getValue('DATABASE_USER'),
            password: this.getValue('DATABASE_PASSWORD'),
            database: this.getValue('DATABASE_DB'),

            entities: [__dirname + '/../**/*.entity.{js,ts}'],

            synchronize: false,
            logging: false,


        }

    }

}

const configService = new ConfigService(process.env)
    .ensureValues([
        'DATABASE_HOST',
        'DATABASE_PORT',
        'DATABASE_USER',
        'DATABASE_PASSWORD',
        'DATABASE_DB'
    ]);

export { configService };