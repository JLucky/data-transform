import React, { useState } from 'react';
import DataConverter from './DataConverter';
import JsonFormatter from './JsonFormatter';
import styles from './Home.module.css';

export default function Home() {
    const [selectedTool, setSelectedTool] = useState('data-converter'); // 修改了这里

    const handleClick = tool => {
        setSelectedTool(tool);
    };

    return (
        <div className={styles.container}>
            {/* <h1>请选择一个工具</h1> */}
            <div className={styles.buttons}> {/* 添加了这一行 */}
                <button className={styles.button} onClick={() => handleClick('data-converter')}>大小转换</button>
                <button className={styles.button} onClick={() => handleClick('json-formatter')}>JSON格式化</button>
            </div> {/* 添加了这一行 */}
            {selectedTool === 'data-converter' && <DataConverter />}
            {selectedTool === 'json-formatter' && <JsonFormatter />}
        </div>
    );
}
