/* eslint-disable @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
// lodash merge
import * as _ from 'lodash';

const YAML_CONFIG_FILENAME = 'config.yml';
const filePath = join(__dirname, '../config', YAML_CONFIG_FILENAME);
const envPath = join(
  __dirname,
  '../config',
  `config.${process.env.NODE_ENV || 'development'}.yml`,
);
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const commonConfig = yaml.load(readFileSync(filePath, 'utf8')) as Record<
  string,
  any
>;
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const envConfig = yaml.load(readFileSync(envPath, 'utf8')) as Record<
  string,
  any
>;

export const configuration = (): any => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // return yaml.load(readFileSync(filePath, 'utf8')) as Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return _.merge(commonConfig, envConfig);
};
