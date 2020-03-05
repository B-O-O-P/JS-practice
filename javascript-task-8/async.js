'use strict';

/**
 * Сделано задание на звездочку
 * Реализована остановка промиса по таймауту
 */
const isStar = true;

/** Функция паралелльно запускает указанное число промисов
 * @param {Function<Promise>[]} jobs – функции, которые возвращают промисы
 * @param {Number} parallelNum - число одновременно исполняющихся промисов
 * @param {Number} timeout - таймаут работы промиса
 * @returns {Promise<Array>}
 */
function runParallel(jobs, parallelNum, timeout = 1000) {
    return new Promise(resolve => {
        if (!jobs.length) {
            resolve([]);
        }
        const result = [];
        const parallelCount = Math.min(jobs.length, parallelNum);

        let currentJobIndex = 0;

        function timedOutPromise() {
            return new Promise(reject => {
                setTimeout(reject, timeout, new Error('Promise timeout'));
            });
        }

        async function startJob(jobIndex) {
            const job = jobs[jobIndex];
            result[jobIndex] = await Promise.race([job(), timedOutPromise()])
                .then(res => res, err => err);

            if (result.length === jobs.length) {
                resolve(result);
            }

            if (currentJobIndex < jobs.length) {
                startJob(currentJobIndex++);
            }
        }

        for (let i = 0; i < parallelCount; i++) {
            startJob(currentJobIndex++);
        }
    });
}

module.exports = {
    runParallel,

    isStar
};
