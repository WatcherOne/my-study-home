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

 Date: 18/05/2023 16:25:42
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
  `nation` int(0) DEFAULT NULL COMMENT '作者国籍（关联字典Id）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '作家表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of author
-- ----------------------------
INSERT INTO `author` VALUES (1, '中岛敦', 2);

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int(0) NOT NULL COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '书名',
  `author_id` int(0) DEFAULT NULL COMMENT '关联作者Id',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '封面',
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '标签（关联ids）',
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '简介',
  `publish_time` datetime(0) DEFAULT NULL COMMENT '出版时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '书籍表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1, '山月记', 1, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for book_list
-- ----------------------------
DROP TABLE IF EXISTS `book_list`;
CREATE TABLE `book_list`  (
  `id` int(0) NOT NULL COMMENT '书单主键',
  `user_id` int(0) NOT NULL COMMENT '关联用户Id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '书单名称',
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '书单描述',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '书单封面',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户关联书单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for book_list_book
-- ----------------------------
DROP TABLE IF EXISTS `book_list_book`;
CREATE TABLE `book_list_book`  (
  `list_id` int(0) NOT NULL COMMENT '书单Id',
  `book_id` int(0) NOT NULL COMMENT '书籍Id',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`list_id`, `book_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '书单关联书籍表' ROW_FORMAT = Dynamic;

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
  `id` int(0) NOT NULL COMMENT '主键',
  `dict_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '字典名称',
  `dict_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '字典编码（用于标识哪种类型的字典）',
  `create_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '创建人',
  `create_time` datetime(0) DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '更新人',
  `update_time` datetime(0) DEFAULT NULL COMMENT '更新时间',
  `remarks` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`, `dict_code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字典类型表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict_type
-- ----------------------------
INSERT INTO `dict_type` VALUES (1, '国籍', 'nation', NULL, NULL, NULL, NULL, '国籍列表');
INSERT INTO `dict_type` VALUES (2, '语言', 'language', NULL, NULL, NULL, NULL, '语言列表');
INSERT INTO `dict_type` VALUES (3, '性别', 'sex', NULL, NULL, NULL, NULL, '性别列表');

-- ----------------------------
-- Table structure for dict_type_data
-- ----------------------------
DROP TABLE IF EXISTS `dict_type_data`;
CREATE TABLE `dict_type_data`  (
  `id` int(0) NOT NULL COMMENT '主键Id',
  `dict_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '字典类型（关联的字段编码）',
  `dict_label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '字典标签',
  `dict_value` int(0) DEFAULT NULL COMMENT '字典键值',
  `dict_sort` int(0) DEFAULT NULL COMMENT '字典排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字典数据表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict_type_data
-- ----------------------------
INSERT INTO `dict_type_data` VALUES (1, 'nation', '中国', 0, 1);
INSERT INTO `dict_type_data` VALUES (2, 'nation', '日本', 1, 2);
INSERT INTO `dict_type_data` VALUES (3, 'nation', '德国', 2, 3);
INSERT INTO `dict_type_data` VALUES (4, 'nation', '法国', 3, 4);
INSERT INTO `dict_type_data` VALUES (5, 'language', '中文', 0, 1);
INSERT INTO `dict_type_data` VALUES (6, 'language', '英文', 1, 2);
INSERT INTO `dict_type_data` VALUES (7, 'language', '日文', 2, 3);
INSERT INTO `dict_type_data` VALUES (8, 'sex', '女', 0, 1);
INSERT INTO `dict_type_data` VALUES (9, 'sex', '男', 1, 2);

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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'av', '123456', NULL, NULL, 0, 0, NULL, NULL, '2023-05-15 06:59:25', NULL, '2023-05-15 06:59:25', NULL);
INSERT INTO `user` VALUES (2, 'av2', '123456', NULL, NULL, 0, 0, NULL, NULL, '2023-05-15 08:14:31', NULL, '2023-05-15 08:14:31', NULL);
INSERT INTO `user` VALUES (3, 'av7', 'U2FsdGVkX18cKpy0Dy5z8fEqhCtA5ddoXPWijjkXqRI=', NULL, NULL, 0, 0, NULL, NULL, '2023-05-15 08:52:57', NULL, '2023-05-15 08:52:57', NULL);
INSERT INTO `user` VALUES (6, 'zhubo', 'U2FsdGVkX18gEgn/5IGaPjR0m6tAi8kFXSFA1mUxI7I=', NULL, NULL, 0, 1, NULL, NULL, '2023-05-18 07:31:26', NULL, '2023-05-18 07:31:26', NULL);

SET FOREIGN_KEY_CHECKS = 1;
