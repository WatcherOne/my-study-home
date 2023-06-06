/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : book_house

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 24/05/2023 14:29:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for author
-- ----------------------------
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author`  (
  `id` int(0) NOT NULL COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '作者姓名',
  `name_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '作者英文名',
  `year_birth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '出生年份',
  `year_dead` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '死亡年份',
  `nation` int(0) DEFAULT NULL COMMENT '作者国籍（关联字典Id）',
  `introdution` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '作者描述',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '作家表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of author
-- ----------------------------
INSERT INTO `author` VALUES (1, '罗伯特·戴博德', 'Robert de Board', '1932', '2020', 2, '英国心理学家，毕业于剑桥大学赛尔文学院，曾任教于英国亨利商学院，是一位经验丰富的心理学研究者和临床实践者。曾出版心理学类教科书《咨询技巧》《组织的心理分析》', NULL, '2023-05-24 09:35:48', NULL, '2023-05-24 09:35:51');
INSERT INTO `author` VALUES (2, '周岭', NULL, NULL, NULL, 0, '作家，自媒体人，心智探索者。他的思考不慌张、不迎合，常被读者誉为一股清流', NULL, '2023-05-24 09:42:41', NULL, '2023-05-24 09:42:43');
INSERT INTO `author` VALUES (3, '塔拉·韦斯特弗', 'Tara Westover', '1986', NULL, 1, '美国历史学家，作家', NULL, '2023-05-24 09:48:41', NULL, '2023-05-24 09:48:44');
INSERT INTO `author` VALUES (5, '刘未鹏', 'pongba', NULL, NULL, 0, '南京大学计算机系硕士毕业，现就职于微软亚洲研究院创新工程中心。', NULL, '2023-05-24 09:56:18', NULL, '2023-05-24 09:56:25');
INSERT INTO `author` VALUES (6, '黑泽明', NULL, '1910', '1998', 3, '日本导演。执导的《罗生门》（1950）获威尼斯电影节金狮奖、奥斯卡最佳外语片奖；《七武士》（1954）获威尼斯电影节银狮奖；《暗堡里的三恶人》（1958）获柏林电影节银熊奖；《德尔苏•乌扎拉》（1975）获奥斯卡最佳外语片奖；《影子武士》（1980）获戛纳电影节金棕榈奖；《八月狂想曲》（1991）获日本电影学院奖。\r\n\r\n1990年，成为史上第一位获奥斯卡终身成就奖的亚洲电影人；1999年被《时代周刊》评为“20世纪亚洲最有影响力的人物”。为表达无限的崇敬之意，“黑泽明”词条由斯皮尔伯格、张艺谋共同撰写。', NULL, '2023-05-24 10:20:20', NULL, '2023-05-24 10:20:22');
INSERT INTO `author` VALUES (7, '毛姆', NULL, '1874', '1965', 2, '英国小说家，散文家，戏剧家，出生于法国巴黎。', NULL, '2023-05-24 10:23:03', NULL, '2023-05-24 10:23:06');
INSERT INTO `author` VALUES (8, '高野和明', NULL, NULL, NULL, 3, '日本小说家、编剧。他从小立志当导演，小学六年级就开始自己制作电影。1989年赴美深造钻研电影制作，1991年回国后开始剧本创作。', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '书名',
  `sub_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '副标题',
  `foreign_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '外文名',
  `author_id` int(0) DEFAULT NULL COMMENT '关联作者Id',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '封面',
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '标签（关联ids）',
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '简介',
  `publish_time` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '出版时间',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '书籍表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1, '蛤蟆先生去看心理医生', NULL, 'Counselling For Toads: A Psychological Adventure', 1, NULL, NULL, '蛤蟆先生一向爱笑爱闹，如今却一反常态地郁郁寡欢，他一个人躲在屋里，连起床梳洗的力气都没有。朋友们非常担心他，建议他去做心理咨询。在10次心理咨询中，蛤蟆在咨询师苍鹭的带领下，勇敢地探索了自己的内心世界，也逐渐找回了信心与希望……\r\n\r\n这并不是一本写给孩子看的书，而是一本非常有深度的心理疗愈读物。出版20多年来，已成为英国国民级心理咨询入门书。它基于TA沟通分析心理学的理论，讲述了一个抑郁症病人通过十次心理咨询，终于找回快乐和自信的全过程。在书中，可以看到心理咨询的倾听、共情、沟通技巧，也可以看到一个标准的心理咨询流程的模板。读者犹如亲临现场，体验心理咨询的每一个细节，见证疗愈和改变的发生。', '1997年', NULL, NULL, NULL, NULL);
INSERT INTO `book` VALUES (2, '认知觉醒', '开启自我改变的原动力', NULL, 2, NULL, NULL, '这是一部可以穿透时间的个人成长方法论。通过“大脑构造、潜意识、元认知”等思维规律，你将真正看清自己；通过“深度学习、关联、反馈”事物规律，你将洞悉如何真正成事！\r\n\r\n如果对自己不了解，我们就会被人的原始天性束缚，这往往会让我们感到很痛苦。然而，如果了解大脑知识，我们就可以观察并指导自己，运用认知的力量去克服天性，从而获得长久而清晰的内在动力，让我们告别绝大多数人生痛苦。\r\n\r\n一个人的认知越清晰，行动就越坚定。本书解答了很多问题：\r\n\r\n为什么我们做事总是急于求成、避难趋易？\r\n\r\n所谓耐心，就是要“咬牙坚持、死磕到底”吗？\r\n\r\n如何彻底告别用“三分钟热情”和“打鸡血”的方式做事？\r\n\r\n如何保持极度专注？如何消除焦虑？如何提高学习能力？……\r\n\r\n一个人真正的耐心从来不是苦哈哈的毅力支撑，而是具有长远目光的结果。只要了解大脑规律，并知晓诸如“复利效应、舒适区边缘、学习权重比、学习平台期...', '2020年10月', NULL, NULL, NULL, NULL);
INSERT INTO `book` VALUES (3, '暗时间', NULL, 'Drak Time', 5, NULL, NULL, '2003年，刘未鹏在杂志上发表了自己的第一篇文章，并开始写博客。最初的博客较短，也较琐碎，并夹杂着一些翻译的文章。后来渐渐开始有了一些自己的心得和看法。在这8年里，作者平均每个月写1篇博客或更少，但从未停止。这本书便是从刘未鹏8年的博客文章中精选出来的，主要关于心智模式、学习方法和时间利用，《暗时间》的书名便来自于此。', '2011年08月', NULL, NULL, NULL, NULL);
INSERT INTO `book` VALUES (4, '你当像鸟飞往你的山', NULL, 'Educated: A Memoir', 3, NULL, NULL, '人们只看到我的与众不同：一个十七岁前从未踏入教室的大山女孩，却戴上一顶学历的高帽，熠熠生辉。只有我知道自己的真面目：我来自一个极少有人能想象的家庭。我的童年由垃圾场的废铜烂铁铸成，那里没有读书声，只有起重机的轰鸣。不上学，不就医，是父亲要我们坚持的忠诚与真理。父亲不允许我们拥有自己的声音，我们的意志是他眼中的恶魔。哈佛大学，剑桥大学，哲学硕士，历史博士……我知道，像我这样从垃圾堆里爬出来的无知女孩，能取得如今的成就，应当感激涕零才对。但我丝毫提不起热情。我曾怯懦、崩溃、自我怀疑，内心里有什么东西腐烂了，恶臭熏天。直到我逃离大山，打开另一个世界。那是教育给我的新世界，那是我生命的无限可能。', '2019年10月', NULL, NULL, NULL, NULL);
INSERT INTO `book` VALUES (5, '蛤蟆的油', NULL, '蝦蟇の油', 6, NULL, NULL, '日本民间流传着这样一个故事：在深山里，有一种特别的蛤蟆，它和同类相比，不仅外表更丑，而且还多长了几条腿。人们抓到它后，将其放在镜前或玻璃箱内，蛤蟆一看到自己丑陋不堪的外表，不禁吓出一身油。这种油，也是民间用来治疗烧伤烫伤的珍贵药材。晚年回首往事，黑泽明自喻是只站在镜前的蛤蟆，发现自己从前的种种不堪，吓出一身油——这油的结晶就是这部《蛤蟆的油》。\r\n\r\n从孩提时代一个孱弱的“夜哭郎”，如何痴迷于绘画和电影，如何幸得启蒙而踏入电影界，最后如何执导《罗生门》等影片而成为世界级的导演黑泽明坦然直面过往的一切，人生的甘苦，艺术的感悟，流露于字里行间。', '2014年08月', NULL, NULL, NULL, NULL);
INSERT INTO `book` VALUES (6, '阅读是一座随身携带的避难所', '毛姆读书随笔', 'Reading Notes', 7, NULL, NULL, '如果世界上有一种叫作阅读家的职业，不会再有人比毛姆更加适合。\r\n\r\n作家热爱读书，这似乎是自然的事，但像毛姆一样，按图索骥，从作家的作品问解到作家的生平和性格，再由他们的生平和性格回转身，关照作家的作品，并以此写成一本精彩绝伦的随笔集，也是文学史上并不多见的妙事。\r\n\r\n这是一本巨匠的八卦之书，也是毛姆对于阅读和哲学的洞见之书。文学巨匠的辛辣秘密与有趣人性，简·奥斯汀善良的“刻薄”，司汤达内心的自卑，福楼拜童年的沙滩初恋，列夫·托尔斯泰一生的迷惑与忏悔，陀思妥耶夫斯基的背叛……', '2017年06月', NULL, NULL, NULL, NULL);
INSERT INTO `book` VALUES (7, '消失的13级台阶', NULL, '13階段', 8, NULL, NULL, '一对老夫妇惨遭杀害。一切证据都指向树原亮，他却因车祸，恰好丧失了案发前后数小时的记忆……\r\n死刑执行官南乡携手刚假释出狱的纯一调查，希望替这位丧失记忆的死刑犯洗清冤屈。但他们查到的唯一线索，就是树原亮记得自己曾“走在台阶上”。\r\n距离树原亮被执行死刑的时间所剩无几，但这起案 件始终疑云重重，仅有的线索“台阶”仿佛也凭空消失了……', '2020年05月', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for book_group
-- ----------------------------
DROP TABLE IF EXISTS `book_group`;
CREATE TABLE `book_group`  (
  `id` int(0) NOT NULL COMMENT '书单主键',
  `user_id` int(0) NOT NULL COMMENT '关联用户Id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '书单名称',
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '书单描述',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '书单封面',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户关联书单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book_group
-- ----------------------------
INSERT INTO `book_group` VALUES (1, 6, '6月书单', NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for book_group_book
-- ----------------------------
DROP TABLE IF EXISTS `book_group_book`;
CREATE TABLE `book_group_book`  (
  `list_id` int(0) NOT NULL COMMENT '书单Id',
  `book_id` int(0) NOT NULL COMMENT '书籍Id',
  `order` int(0) DEFAULT NULL COMMENT '书籍顺序',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`list_id`, `book_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '书单关联书籍表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book_group_book
-- ----------------------------
INSERT INTO `book_group_book` VALUES (1, 1, 2, NULL, '2023-05-24 09:25:42', '', NULL);
INSERT INTO `book_group_book` VALUES (1, 3, 3, NULL, '2023-05-24 10:26:10', NULL, NULL);
INSERT INTO `book_group_book` VALUES (1, 5, 4, NULL, '2023-05-24 10:26:18', NULL, NULL);
INSERT INTO `book_group_book` VALUES (1, 7, 1, NULL, '2023-05-24 10:26:25', NULL, NULL);

-- ----------------------------
-- Table structure for book_user
-- ----------------------------
DROP TABLE IF EXISTS `book_user`;
CREATE TABLE `book_user`  (
  `user_id` int(0) NOT NULL COMMENT '用户Id',
  `book_id` int(0) NOT NULL COMMENT '书籍Id',
  `is_read` int(0) DEFAULT 0 COMMENT '读状态（0：未读，1：在读，2：已读）',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`user_id`, `book_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '书籍与用户状态记录表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for dict_type
-- ----------------------------
DROP TABLE IF EXISTS `dict_type`;
CREATE TABLE `dict_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `dict_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '字典编码（用于标识哪种类型的字典）',
  `dict_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '字典名称',
  `remarks` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `dict_code`(`dict_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字典类型表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict_type
-- ----------------------------
INSERT INTO `dict_type` VALUES (1, 'nation', '国籍', '国籍列表', NULL, NULL, NULL, NULL);
INSERT INTO `dict_type` VALUES (2, 'language', '语言', '语言列表', NULL, NULL, NULL, NULL);
INSERT INTO `dict_type` VALUES (3, 'sex', '性别', '性别列表', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for dict_type_data
-- ----------------------------
DROP TABLE IF EXISTS `dict_type_data`;
CREATE TABLE `dict_type_data`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键Id',
  `dict_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '字典编码（关联的字段编码）',
  `dict_label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '字典标签',
  `dict_value` int(0) DEFAULT NULL COMMENT '字典键值',
  `dict_sort` int(0) DEFAULT NULL COMMENT '字典排序',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 213 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字典数据表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict_type_data
-- ----------------------------
INSERT INTO `dict_type_data` VALUES (1, 'nation', '中国', 0, 1, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (2, 'nation', '美国', 1, 2, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (3, 'nation', '英国', 2, 3, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (4, 'nation', '日本', 3, 4, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (5, 'nation', '法国', 4, 5, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (6, 'nation', '德国', 5, 6, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (10, 'language', '中文', 0, 1, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (11, 'language', '英文', 1, 2, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (12, 'language', '日文', 2, 3, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (20, 'sex', '女', 0, 1, NULL, NULL, NULL, NULL);
INSERT INTO `dict_type_data` VALUES (21, 'sex', '男', 1, 2, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(0) NOT NULL COMMENT '主键',
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '标签文案',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `acount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户密码',
  `nick_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '用户名称',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '用户头像',
  `sex` int(0) DEFAULT 0 COMMENT '用户性别(字典Id)',
  `language` int(0) DEFAULT 0 COMMENT '用户语言(字典Id)',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '联系电话',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '关联邮箱',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `acount`(`acount`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'av', '123456', NULL, NULL, 0, 0, NULL, NULL, '2023-05-15 06:59:25', NULL, '2023-05-15 06:59:25', NULL);
INSERT INTO `user` VALUES (2, 'av2', '123456', NULL, NULL, 0, 0, NULL, NULL, '2023-05-15 08:14:31', NULL, '2023-05-15 08:14:31', NULL);
INSERT INTO `user` VALUES (3, 'av7', 'U2FsdGVkX18cKpy0Dy5z8fEqhCtA5ddoXPWijjkXqRI=', NULL, NULL, 0, 0, NULL, NULL, '2023-05-15 08:52:57', NULL, '2023-05-15 08:52:57', NULL);
INSERT INTO `user` VALUES (6, 'zhubo', 'U2FsdGVkX18gEgn/5IGaPjR0m6tAi8kFXSFA1mUxI7I=', NULL, NULL, 0, 1, NULL, NULL, '2023-05-18 07:31:26', NULL, '2023-05-18 07:31:26', NULL);
INSERT INTO `user` VALUES (12, 'watcher', 'U2FsdGVkX1+LrfKWXKNBDGlBi4K33gisqFhTbH2LkBg=', NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-05-22 08:31:36', NULL, '2023-05-22 08:31:36');

SET FOREIGN_KEY_CHECKS = 1;
