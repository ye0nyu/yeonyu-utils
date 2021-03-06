/*
 * yeonyu-utils
 *
 * Copyright (c) 2021. yeonyu. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * Date from objectId string (mongoDB)
 *
 * @param objectId
 *
 * @return Date
 */
export const dateFromObjectId = (objectId: string) => {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

/**
 * @deprecated
 *
 * @param uuid
 */
export const getOnlyGuid = (uuid: string) => {
    const pos = uuid.indexOf('\\');
    return (pos > 0) ? uuid.substr(0, pos) : uuid;
};

/**
 * Simple parse json to object fail
 *
 * @return any;
 * @return undefined;
 *
 * @param raw
 */
export const parseJsonSafety = (raw: any): any => (function (raw) {
    try {
        return JSON.parse(raw);
    } catch (err) {
        return undefined;
    }
})(raw);

export default {
  dateFromObjectId,
  getOnlyGuid,
  parseJsonSafety,
}
