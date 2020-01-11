//---------------------------------
// 通用辅助接口
//---------------------------------
if(!ArrayBuffer["transfer"]) {
    ArrayBuffer["transfer"] = function (source, length) {
        source = Object(source);
		var dest = new ArrayBuffer(length);
		
        if(!(source instanceof ArrayBuffer) || !(dest instanceof ArrayBuffer)) {
            throw new TypeError("ArrayBuffer.transfer, error: Source and destination must be ArrayBuffer instances");
		}
		
        if(dest.byteLength >= source.byteLength) {
			var buf = new Uint8Array(dest);
			buf.set(new Uint8Array(source), 0);
		}
		else {
			throw new RangeError("ArrayBuffer.transfer, error: destination has not enough space");
		}
		
		return dest;
    };
};

if(!String.prototype["format"]) {
	String.prototype["format"] = function() {
		var values = arguments;
		return this.replace(/\{(\d+)\}/g, function(match, index) {
			if (values.length > index) {
				return values[index];
			} 
			else {
				return "";
			}
		});
	};
}

export default class CommonUtil {

	//遍历root节点，将挂在它身上的所有子层次节点根据名字索引到tbl表中
	public static traverseNodes(root:any, tbl:any) 
	{
		if(!root || !root.children) { return; }
		var childlist = root.children;
		for (var i = 0; i < childlist.length; i++){
			tbl[childlist[i].getName()] = childlist[i];
		//	cc.log("----", childlist[i].getName());
			CommonUtil.traverseNodes(childlist[i], tbl)
		}
	}

	public static traveseLabels(root:cc.Node, tbl:any)
	{
		if(!root) { return; }
		var comps = root.getComponentsInChildren(cc.Label);
		for(var i in comps) {
			tbl[comps[i].node.name] = comps[i];
		}
	}

	//通用到销毁接口，销毁任意对象
	public static safeDelete(obj:any) {
		if(obj===null || obj===undefined) {
			return;
		}
		if(obj.delInstance) {
			obj.delInstance();
			return;
		}
		if(obj.node) {
			obj.node.destroy();
			return;
		}
		obj.destroy();
	}

	//
	public static getUUID(): string {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";

		var uuid = s.join("");
		return uuid;
	}

	//判断root节点下是否挂有输入框
	public static hasEditbox(root:any) 
	{
		if(!root || !root.children) { return false; }
		var childlist = root.children;
		for (var i = 0; i < childlist.length; i++){
			if(childlist[i].getComponent(cc.EditBox)) {
				return true;
			}
			return CommonUtil.hasEditbox(childlist[i]);
		}
		return false;
	}

	//给节点添加点击事件
	public static addClickEvent(target:cc.Node, callback:Function, thisObj?:any, arg?:any) {
		target.on(cc.Node.EventType.TOUCH_END, callback, thisObj);
	}

	//移除节点上到点击事件
	public static delClickEvent(target:cc.Node, callback:Function, thisObj?:any){
		target.off(cc.Node.EventType.TOUCH_END, callback, thisObj);
	}

	//将obj节点设置为模态对话框
	public static setModal(obj:cc.Node, flag:boolean)
	{
		if(!obj || !cc.isValid(obj)){ return; }
		obj.on(cc.Node.EventType.TOUCH_START, function(event:any){ 
			event.stopPropagation(); 
		}, obj);
		obj.on(cc.Node.EventType.TOUCH_END, function(event:any){ 
			event.stopPropagation(); 
			if(flag){ this.destroy(); } 
		}, obj);
	}

	//坐标空间转换（原点为左下角）
	public static convertSpace(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec2
	{
		var pt = srcObj.convertToWorldSpace(cc.v2(x,y));
		return dstObj.convertToNodeSpace(pt);
	}

	//坐标空间转换（原点为锚点）
	public static convertSpaceAR(srcObj:cc.Node, dstObj:cc.Node, x:number=0, y:number=0) : cc.Vec3
	{
		var pt = srcObj.convertToWorldSpaceAR(cc.v2(x,y));
		return dstObj.convertToNodeSpaceAR(pt);
	}

	//
	static Bytes2Str(arr: Uint8Array, flagPos:number = 7) : string {
		let str = "";
		for (let i = 0; i < arr.length; i++) {
			let tmp = arr[i].toString(16);
			if (tmp.length == 1) {
				tmp = "0" + tmp;
			}
			str += " " + tmp;
			if(i==flagPos) { str += "  "; }
		}
		return str;
	}

	//随机数
	public static getRandomInt(min:number, max:number) : number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//洗牌算法
	public static shuffle(array: Array<any>) {
		for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	}

	//utf8数组转换为字符串
	public static utf8ArrayToString(array) : string
	{
		var out:string, i:number, len:number, c:number;
		var char2:number, char3:number;
	
		out = "";
		len = array.length;
		i = 0;
	
		while(i < len)
		{
			c = array[i++];
	
			switch(c >> 4)
			{
				case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
				// 0xxxxxxx
				out += String.fromCharCode(c);
				break;
				case 12: case 13:
				// 110x xxxx   10xx xxxx
				char2 = array[i++];
				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
				break;
				case 14:
					// 1110 xxxx  10xx xxxx  10xx xxxx
					char2 = array[i++];
					char3 = array[i++];
					out += String.fromCharCode(((c & 0x0F) << 12) |
						((char2 & 0x3F) << 6) |
						((char3 & 0x3F) << 0));
					break;
			}
		}
		
		return out;
	}

	//字符串转换为utf8数组
	public static stringToUTF8Bytes(str:string) : any[] 
	{
		var utf8 = [];
		for (var i=0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode>>6) & 0x3f), 0x80 | (charcode & 0x3f));
			}
			// surrogate pair
			else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff)<<10) | (str.charCodeAt(i) & 0x3ff))
				utf8.push( 	0xf0 | (charcode >>18), 
							0x80 | ((charcode>>12) & 0x3f), 
							0x80 | ((charcode>>6) & 0x3f), 
							0x80 | (charcode & 0x3f) );
			}
		}
		return utf8;
	}

	//
	static limitNum(v:number, minV:number, maxV:number) : number
	{
		if(minV>maxV){ var tmp = minV; minV = maxV; maxV = tmp; }
		if(maxV!==null) { if(v>maxV) v = maxV; }
		if(minV!==null) { if(v<minV) v = minV; }
		return v;
	}

	//浅复制
	static simpleCopy(target, source) {
		if(source === undefined || source === null) { return; }
		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key];
				cc.log("copy: ", key, target[key]);
			}
		}
	}

	//深复制
	static deepClone(source: Object): any {
		if (null == source || {} == source || [] == source) {
			return source;
		}

		let newObject: any;
		let isArray = false;
		if ((source as any).length) {
			newObject = [];
			isArray = true;
		} else {
			newObject = {};
			isArray = false;
		}
		for (let key of Object.keys(source)) {
			if (null == source[key]) {
				if (isArray) {
					newObject.push(null);
				} else {
					newObject[key] = null;
				}
			} else {
				let sub = (typeof source[key] == 'object') ? this.deepClone(source[key]) : source[key];
				if (isArray) {
					newObject.push(sub);
				} else {
					newObject[key] = sub;
				}
			}
		}
		return newObject;
	}

	//根据超链接下载网络图片
	public static loadWebImg(sp, url, auto): void {
		var width = sp.node.width;
		var height = sp.node.height;
		if ("http" == url.substring(0, 4)) {
			if (cc.sys.os == cc.sys.OS_IOS) {
				if ("http:" == url.substring(0, 5)) {
					url = "https" + url.substring(4, url.length);
				}
			}
			cc.loader.load(url, function (err, textTure) {
				if (err) {
					cc.error('加载图片出错了' + err);
				} else {
					var spriteFrame = new cc.SpriteFrame();
					spriteFrame.setTexture(textTure);
					sp.spriteFrame = spriteFrame;
					if (!auto) {
						var nWidth = sp.node.width;
						var nHeight = sp.node.height;
						sp.node.setScale(width / nWidth, height / nHeight);
					}
				}
			});
		} else {
			cc.loader.loadRes(url, cc.SpriteFrame, function (spriteFrame) {
				if (!spriteFrame) {
					// 	cc.error('加载图片出错了' + err);
				} else {
					sp.spriteFrame = spriteFrame;
					if (!auto) {
						var nWidth = sp.node.width;
						var nHeight = sp.node.height;
						sp.node.setScale(width / nWidth, height / nHeight);
					}
				}
			});
		}
	}

	static getLocalTime(nS) {
		var now = new Date(parseInt(nS) * 1000);
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var date = now.getDate();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
	}

	/**
	 * 精确浮点数，只截取不四舍五入
	 * @param {*} number    需要补齐的数字
	 * @param {*} length    精确位数
	 * @returns
	 */
	static interceptNumber(number: number, length: number = 2): string {
		if (number === Math.ceil(number)) {
			return number.toString()
		}
		let n = number.toString()
		let strList = n.split(".")

		return strList[0] + "." + strList[1].substring(0, length)
	}

	/**
     * 格式化金币展示 保留俩位小数
     * 每隔三位一个逗号
     * @param {number} value  金币数量
	 * @param {number} divNum  value的实际值为value/divNum
     * @param {boolean} showUnit    是否显示单位 ,默认显示单位
     * @param {boolean} add    是否添加符号在前面  ，默认不添加符号
	 * @param {boolean} showComma    是否使用逗号(千分位),默认添加
	 * @param {boolean} showFixed    是否保留俩位小数，默认 没有0
     */
	static setScoreNumber(value: number, divNum:number, showUnit: boolean = true, add: boolean = false, showComma: boolean = true, showFixed: boolean = false): string {
		if (value == null || value == undefined) {
			console.warn("传入未定义数据！！", value)
			return
		}

		let copyNumber = Math.abs(value / divNum);//最新分单位
		let str = ""   //先确定单位
		let BILLION = 100000000
		let TENTHOUSAND = 10000
		let unit = ""
		showUnit = false; //最新版需求不需要单位了 
		if (showUnit && copyNumber >= 100000) {
			if (Math.floor(copyNumber / BILLION) > 0) {
				unit = "亿"
				str = this.interceptNumber(copyNumber / BILLION, 1)
			} else {
				if (Math.floor(copyNumber / TENTHOUSAND) > 0) {
					unit = "万"
					str = this.interceptNumber(copyNumber / TENTHOUSAND, 1)
				}
			}
		} else {
			// 是否保留 俩位小数  0.00
			if (!showFixed) {
				str = copyNumber.toString()
			} else {
				str = copyNumber.toFixed(2)
			}
			//str = copyNumber.toFixed(2); //保留俩位小数 
		}

		//加，显示 先按照3个长度 解出来 ，倒叙拼接
		let strList = str.split(".")
		let count = Math.floor((strList[0].length - 1) / 3)
		if (showComma && count > 0) {
			str = ""
			let arr = []

			for (let index = 0; index < count; index++) {
				arr.push(strList[0].slice(strList[0].length - 3, strList[0].length));
				strList[0] = strList[0].substring(0, strList[0].length - 3)
			}
			arr.push(strList[0]);
			for (let j = arr.length - 1; j >= 0; j--) {
				if (j == arr.length - 1) {
					str = arr[j];
				} else {
					str = str + "," + arr[j];
				}
			}
			//带小数点的
			if (strList[1]) {
				str = str + "." + strList[1]
			}

		}
		str = str + unit
		// 是否添加符号
		if (value < 0) {
			str = "-" + str
		} else if (add) {
			str = "+" + str
		}

		return str
	}

	/**
     * 处理节点及其所有子节点的置灰和恢复 state: 1置灰，0正常
     * @static
     * @memberof Util
     */
	static grayNode(node: cc.Node, state: number) {
		cc.log(node)
		if (node == null) { return }
		let s = node.getComponentsInChildren(cc.Sprite);
		for (let i = 0; i < s.length; i++) {
			if (state === 1) {
				s[i].setMaterial(0, cc["Material"]["getInstantiatedBuiltinMaterial"]('2d-gray-sprite', s[i]));
			} else if (state === 0) {
				s[i].setMaterial(0, cc["Material"]["getInstantiatedBuiltinMaterial"]('2d-sprite', s[i]));
			}
		}
	}

	//
	static appendArray(dst: any[], arr: any[]): void {
		if (arr) {
			for (var i in arr) {
				dst.push(arr[i]);
			}
		}
	}

	//
	static minusArray(src: any[], arr: any[]): void {
		if (!arr) { return; }
		for (var i = 0; i < arr.length; i++) {
			var idx = src.indexOf(arr[i]);
			if (idx >= 0) {
				src.splice(idx, 1);
			}
		}
	}

	static isSameArray(a1: any[], a2: any[]): boolean {
		if (typeof a1 != typeof a2) { return false; }
		if (a1.length != a2.length) { return false; }
		for (var i in a1) {
			if (a2.indexOf(a1[i]) < 0) {
				return false;
			}
		}
		for (var i in a2) {
			if (a1.indexOf(a2[i]) < 0) {
				return false;
			}
		}
		return true;
	}

}
