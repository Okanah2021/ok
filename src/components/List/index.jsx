//本代码由Okanah(okanah.cn)学习编写，欢迎交流Okanah@88.com
import React, { Component, Fragment } from 'react'
class List extends Component{ //List继承于Component
    constructor(props) {
        super(props) //调用了父级Component的方法，传递进来
        this.state={
            hutao: '胡桃，往生堂当代堂主。',
            list: [],
        }
    }
    render() {
        return (
            <Fragment>
               <div className="All_Hello">
                    <h2>以下是一个响应式设计的学习小实例。</h2>
                    <input className="Add_Input" value={this.state.hutao} onChange={this.hutaoChange.bind(this)} />
                    <button className="Add_Button" onClick={this.addlist.bind(this)} >添加</button>
                    <button className="Cls_Button" onClick={this.clslist.bind(this)} >清空</button>
                    <ul className="HuTao" ><h3>
                        {
                            this.state.list.map((item,index) => {
                                return <li key={item,index}>{item}</li>
                            })
                        }
                    </h3></ul>
                    <div className="kuangjia">
                        <div className="IntroduceTitle" suppressContentEditableWarning contentEditable="False" placeholder="胡桃，往生堂当代堂主。">
                            <div style={{ marginTop: -15 }}><h4>· 说明 ·</h4></div>
                            <hr style={{ marginTop: -15 }} ></hr>
                            <div className="IntroduceText"><font>*  功能：点击“添加”按钮，jsx将自动添加一个新项到list中，内容为输入框中的文字。点击“清空”按钮，列表清空。<br></br>*  原理：利用constructor(props)创建构造函数；写了三个方法，对文本框和两个功能按钮进行事件绑定，实现相应功能。<br></br>*  特点：基于React，使用ES6语法编写，响应式设计。<br></br>*  小结：在调用方法的时候如果忘记进行事件绑定，this的值就是undefined。要记住为方法绑定this。</font></div>
                        </div>
                        <div className="IDTitle" suppressContentEditableWarning contentEditable="False" placeholder="这是Okanah的个人介绍。">
                            <div style={{ marginTop: -15 }}><h4>· 名片 ·</h4></div>
                            <hr style={{ marginTop: -15 }} ></hr>
                            <div className="IntroduceText" style={{textAlign:'center',marginLeft:'-0.6%',fontSize:'24.5px',fontWeight:'bold'}}>
                                <font color='#041c32'>* OKANAH *<br></br></font>
                                <div style={{textAlign:'center',marginLeft:'1.2%',fontSize:'16px'}}>
                                    <font>摸鱼划水资深专家<br></br></font>
                                    <font>前端爱好者&React菜鸟<br></br></font>
                                    <font>吉他指弹爱好者<br></br></font>
                                    <font>老年乒乓球健身达人<br></br></font>
                                    <font style={{fontSize:13}} color="#949494"><s>流行演唱专业本科在读</s><br></br></font>
                                    <font>原神玩家<br></br></font>
                                    <font>喜欢洗澡时唱歌的变态<br></br></font>
                                    <font style={{fontSize:13}} color="#949494"><s>单身狗</s><br></br></font>
                                    <font>追番《黑色四叶草》<br></br></font>
                                    <font>极端理想主义<br></br></font>
                                    <font>中二病化疗期<br></br></font>
                                    <div style={{marginTop:'5%'}}><img src={require("../../assets/img/wsfw.png").default} width="104.9%"></img></div>
                                </div>
                            </div>
                        </div>
                        <div className="ContactTitle" suppressContentEditableWarning contentEditable="False" placeholder="Okanah的联系方式。">
                            <div style={{ marginTop: -15 }}><h4>· 联系方式 ·</h4></div>
                            <img src={require("../../assets/img/wx.png").default} width="31.5%" style={{float:'left' ,marginTop:'-9px',marginLeft:'7.5px'}}></img>
                                <hr style={{ marginTop: -15 }} ></hr>
                                <div className="IntroduceText" style={{textAlign:'center',marginLeft:'-0.6%',fontSize:'24px',fontWeight:'bold'}}>
                                    <div style={{textAlign:'right',marginTop:'6.5%',marginRight:'12px',fontSize:'18px',color:'#5b2424'}}>
                                        <font>添加微信好友请注明来意.<br></br></font>
                                        <font>QQ：651954589<br></br></font>
                                        <font>Mail：Okanah@88.com<br></br></font>
                                    </div>
                                </div>
                        </div>
                        <div className="GithubTitle" suppressContentEditableWarning contentEditable="False" placeholder="GitHub。">
                            <div style={{ marginTop: -15 }}><h2>· GitHub ·</h2></div>
                            <hr style={{ marginTop: -15 }} ></hr>
                            <div className="IntroduceText" style={{textAlign:'center',marginLeft:'8%',fontSize:'24.5px',fontWeight:'bold'}}>
                                <div style={{marginTop:'9%'}}>
                                    <a href="https://github.com/Okanah2021">
                                        <img src={require("../../assets/img/github.png").default} width="95%"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="FriendTitle" suppressContentEditableWarning contentEditable="False" placeholder="友链。">
                            <div style={{ marginTop: -15 }}><h2>· 友情链接 ·</h2></div>
                            <hr style={{ marginTop: -15 }} ></hr>
                            <div className="IntroduceText" style={{textAlign:'center',marginLeft:'8%',fontSize:'24.5px',fontWeight:'bold'}}>
                                
                            </div>
                        </div>
                    </div>
               </div>
            </Fragment>
        )
    }
    //设置文字的方法
    hutaoChange(e) {
        this.setState({
            hutao: e.target.value
        })
    }
    //增加列表的方法
    addlist() {
        this.setState({
            list: [...this.state.list, this.state.hutao]
        })
    }
    //清空列表的方法
    clslist(index) {
        let Clslist = this.state.list //list数组
        Clslist.splice(index)
        // this.state.list.splice(index,1)  //不能直接操作state中的值坑
        this.setState({
            list:Clslist  //删除后的数据给 list数组赋值
        })
    }
}
export default List    //把写好的sl1组件传递出去
