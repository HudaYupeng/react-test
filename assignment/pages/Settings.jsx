import React from 'react'

export default function Settings() {

    const [theme, setTheme] = React.useState('白天')

    function changeToDark() {
        setTheme(theme => '夜间')
    }
    function changeToDay() {
        setTheme(theme => '白天')
    }

  return (
    <div>
        <h2>主题为：{theme}</h2>
        <button onClick={changeToDark}>夜间主题</button>
        <button onClick={changeToDay}>白天主题</button>
    </div>
  )
}

