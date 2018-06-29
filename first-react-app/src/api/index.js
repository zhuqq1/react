/**
 * @file api接口
 * @author zhuqq
 * @date 2017-08-8
 */
//基础路径
const baseUrl = '/api/';
const apiVersion = "v1"
    //版本
const version = 'CLIENTVERSION V1';
const commonUrl = (id) => `${baseUrl}v1/projects/${id}/webapi/common_method/single_table/syn`;

const api = {
    /*请求权限*/
    fetchModelPermissions: (obj) => `${baseUrl}v1/projects/${obj.projectId}/moduleRight/module/${obj.moduleId}`,
    // 请求用户基础信息
    fetchUserInfo: (projectId) => `${baseUrl}v1/projects/${projectId}/member/loginUserInfo`,
    /*单位字典部分api*/
    //TODO 单位字典
    unitOrgTree: (projectId) => `${baseUrl}v1/projects/${projectId}/memberSubcontractor/searchList`,
    //单位成员列表
    fetchUnitMemberList: (params) => `/projects/${params.id}/memberSubcontractor/searchList`,
    //分组-单位添加
    //fetchUnitDictionaryAdd:``,
    //分组-单位更新
    fetchUnitDictionaryUpdate: (params) => `/projects/${params.id}/webapi/common_method/single_table/syn`,
    //单位字典-左侧的部门单位树
    fetchGroupUnitTree: (params) => `/projects/${params.id}/subcontractorGroup/searchList`,
    //单位字典-新建分组、单位中的上级分组树
    fetchGroupTree: (params) => `/projects/${params.id}/subcontractorGroup/dropDownList`,
    //单位字典-添加工种弹出框中的工种列表
    fetchUnitWorkTypeList: (params) => `/projects/${params.id}/webapi/common_method/single_table/details`,
    //好像没有使用
    fetchUnitGroupList: (params) => `/projects/${params.id}/subcontractorGroup/dropDownList`,
    //组织树-单位删除
    fetchUnitDelete: (params) => `/projects/${params.id}/subcontractor/batchDelete`,
    //组织树-分组删除
    fetchGroupDelete: (params) => `/projects/${params.id}/subcontractorGroup/batchDelete`,
    //单位上下移动--好像没有使用
    fetchUnitDictionaryMove: (id) => `v1/projects/${id}/subcontractor/updown`,
    //分组上下移动
    fetchGroupDictionaryMove: (params) => `/projects/${params.id}/subcontractorGroup/updown`,
    //单位字典-添加成员接口
    fetchUnitMemberAdd: (params) => `/projects/${params.id}/webapi/common_method/single_table/syn`,
    //单位字典-删除成员接口
    fetchUnitMemberDelete: (params) => `/projects/${params.id}/webapi/common_method/single_table/syn`,
    fetchProjectMemberList: ``,
    //单位字典-添加成员时、选择的成员列表（过滤了已选添加的成员）
    fetchUnitMemberFilter: (params) => `/projects/${params.id}/memberSubcontractor/filterSubcontractorList`,
    //单位字典-查询单位下的工种信息
    fetchUnitWorkTypeQuery: (params) => `/projects/${params.id}/subcontractorWorkType/searchList`,
    //单位添加和删除工种
    fetchUnitWorkTypeUpdate: (params) => `/projects/${params.id}/webapi/common_method/single_table/syn`,
    //单位删除工种
    fetchUnitWorkTypeDelete: ``,
    //获取生产工种列表（弹框）=》取下面工种的列表


    /*通用设置部分*/
    fetchBuildStageIsEnter: (projectid) => `${baseUrl}v1/projects/${projectid}/projectinfo/checkIsEnterprise`,
    //施工阶段部分api
    fetchBuildStageAdd_Update_Delete: commonUrl,
    //施工阶更新
    fetchBuildStageUpdate: commonUrl,
    //施工阶删除
    fetchBuildStageDelete: commonUrl,
    //施工阶上下移动
    //fetchBuildStageMove:``,
    //施工阶段列表【POST】{" constructionStage ":{"isDelete":0 //0未删除，1删除}}
    fetchBuildStageList: (id) => `${baseUrl}v1/projects/${id}/webapi/common_method/single_table/details`,
    /*生产进度部分api*/
    //  TODO　延期原因
    //延期原因部分api
    //新建延期分组->原因【POST】　TODO　{"delayReason:[type:1,action:'create',...]"}
    fetchDelayReasonAdd: commonUrl,
    //延期分组->原因更新  TODO {"delayReason:[type:0,action:'update',...]"} type:0是分组1是问题
    fetchDelayReasonUpdate: commonUrl,
    //新建延期分组->原因删除【POST】{type 0、代表分组；1、代表原因 "ids":11111,2222,3333"}
    fetchDelayReasonDelete: (id) => `${baseUrl}v1/projects/${id}/delayReason/batchDelete`,
    //新建延期分组->原因上下移动【POST】{"delayReason:[type:1,action:'create',...]"}
    fetchDelayReasonMove: (id) => `${baseUrl}v1/projects/${id}/delayReason/updown`,
    //新建延期分组下拉框列表【GET】type 0、代表分组；1、代表原因
    fetchDelayReasonDropDownList: (id) => `${baseUrl}v1/projects/${id}/delayReason/dropDownList`,
    //新建延期分组->原因列表【GET】
    fetchDelayReasonList: (id) => `${baseUrl}v1/projects/${id}/delayReason/searchList`,

    //工种部分api
    //  TODO　工种
    // 工种新增【POST】{"workType:[{action:'create',...}]"}
    fetchWorkTypeAdd: commonUrl,
    // 工种更新【POST】{"workType:[{id:xxx,action:'update',...}]"}
    fetchWorkTypeUpdate: commonUrl,
    // 工种删除【POST】{"ids":11111,2222,3333}
    fetchWorkTypeDelete: (id) => `${baseUrl}v1/projects/${id}/workType/batchDelete`,
    // 工种上下移动【POST】{"id":11111,"action":1//1、代表上移；2、代表下移}
    fetchWorkTypeMove: (id) => `${baseUrl}v1/projects/${id}/workType/updown`,
    // 工种列表按条件查询【POST】全部参数是{"workType:[]"}
    fetchWorkTypeListAll: (id) => `${baseUrl}v1/projects/${id}/webapi/common_method/single_table/alldetails`,
    // 工种列表按条件查询【POST】{"workType:{isDelete:0}"}
    fetchWorkTypeList: (id) => `${baseUrl}v1/projects/${id}/webapi/common_method/single_table/details`,

    //材料部分api
    //  TODO　材料
    //材料字典列表
    fetchMaterialList: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/material/list`,
    //材料字典保存
    saveMaterial: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/material/save`,
    //材料字典删除
    materialDelete: (projectId, id) => `${baseUrl}v1/projects/${projectId}/dictionary/material/group/id/${id}/delete`,
    //材料条目删除
    materialItemDelete: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/material/item/delete`,
    //材料字典上下移
    materialMove: (projectId, id) => `${baseUrl}v1/projects/${projectId}/dictionary/material/id/${id}/move`,

    //机械设备部分api
    //  TODO　机械设备
    //机器字典列表
    fetchMechanicaList: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/machine/list`,
    //机器字典保存
    saveMechanica: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/machine/save`,
    //机器字典删除
    mechanicaDelete: (projectId, id) => `${baseUrl}v1/projects/${projectId}/dictionary/machine/group/id/${id}/delete`,
    //机器条目删除
    mechanicaItemDelete: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/machine/item/delete`,
    //机器字典上下移
    mechanicaMove: (projectId, id) => `${baseUrl}v1/projects/${projectId}/dictionary/machine/id/${id}/move`,

    /*质量安全管理接口*/
    //  TODO　分类
    fencCommonUrl: (id) => `${baseUrl}v1/projects/${id}/webapi/common_method/single_table/syn`,
    //分类新增接口 POST "action":"create"
    fetchClassifyAdd: commonUrl,
    //分类编辑修改接口 POST {"taskCategory":[{"id":"1538946438839311",type":2,action":"update",...}]}
    fetchClassifyUpdate: commonUrl,
    //分类批量删除接口 {"type":1,//1、代表质量；2、代表安全"ids":11111,2222,3333}
    fetchClassifDelete: (id) => `${baseUrl}v1/projects/${id}/taskCategory/batchDelete`,
    //获取质量安全问题分类列表 GET（type 1、代表质量；2、代表安全）
    fetchClassifyList: (id) => `${baseUrl}v1/projects/${id}/taskCategory/searchList`,
    //质量安全分类弹框中下拉框列表GET（type 1、代表质量；2、代表安全）
    fetchClassifyDropDownList: (id) => `${baseUrl}v1/projects/${id}/taskCategory/dropDownList`,
    //分类上下移动接口{"type":1,//1、代表质量；2、代表安全"action":1//1、代表上移；2、代表下}
    fetchClassifyMove: (id) => `${baseUrl}v1/projects/${id}/taskCategory/updown`,
    //常见问题导入Excel 【POST】  TODO file : excel文件
    fetchClassifyImportExcel: (id, type = 'quality') => `${baseUrl}v1/projects/${id}/taskCategory/import/${type}`,
    //常见问题导出Excel 【GET】  TODO type==security==quality
    fetchClassifyExportExcel: (id, type = 'quality') => `${baseUrl}v1/projects/${id}/taskCategory/export/${type}`,
    //  TODO //获取项目级分类-----等级是否已经匹配 
    fetchEnterpriseMatched: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/matchEnterprise/check`,
    //  TODO //获取企业级分类平铺数据 
    fetchClassifyEnterprise: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/enterprise/category/matchData/get`,
    //  TODO //获取项目级分类以引用平铺数据 
    fetchQuoteClassifyData: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/category/matchData/get`,
    //  TODO //保存分类引用关系【post】
    fetchSaveClassifyMappingData: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/category/matchData/save`,

    //等级部分接口api
    //  TODO　等级
    //等级新增[POST]
    fetchGradeAdd: (id) => `${baseUrl}v1/projects/${id}/taskPriority/add`,
    //等级更新[POST]
    fetchGradeUpdate: (id) => `${baseUrl}v1/projects/${id}/taskPriority/update`,
    //等级删除[POST]
    fetchGradeDelete: (id) => `${baseUrl}v1/projects/${id}/taskPriority/delete`,
    //等级上下移动
    fetchGradeMove: (id) => `${baseUrl}v1/projects/${id}/taskPriority/updown`,
    //获取单位人员数据
    fetchMemberList: (projectId) => `${baseUrl}v1/projects/${projectId}/appraise/queryMemberTree`,
    //等级列表(按条件查询)  【POST】{"taskPriority":{"category":"quality",// quality质量；security安全"isDelete":0 //0未删除，1删除}
    fetchGradeList: (projectId) => `${baseUrl}v1/projects/${projectId}/webapi/common_method/single_table/details`,
    //等级列表(按条件查询)
    fetchGradeListMember: (projectId) => `${baseUrl}v1/projects/${projectId}/taskPriority/searchList`,
    //等级列表(全)  【POST】{"taskPriority":[] }
    fetchGradeListAll: (projectId) => `${baseUrl}v1/projects/${projectId}/webapi/common_method/single_table/alldetails`,
    //  TODO //获取项目级分类-----等级是否已经匹配 见分类
    //  TODO //获取企业级等级平铺数据 
    fetchGradeEnterprise: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/enterprise/priority/matchData/get`,
    //  TODO //获取项目级等级以引用平铺数据 【post】
    fetchQuoteGradeListData: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/priority/matchData/get`,
    //  TODO //保存等级引用关系 【post】
    fetchSaveGradeMappingData: (projectId) => `${baseUrl}v1/projects/${projectId}/dictionary/priority/matchData/save`,


    //常见问题部分接口api
    //  TODO　常见问题
    //常见问题新增
    fetchCommonProblemAdd: commonUrl,
    //常见问题更新 【POST】 {"taskCommonDescription":[{"id":1538945100659723,"parentId":"11111222","type":1,"action":"update"}]
    fetchCommonProblemUpdate: commonUrl,
    //常见问题删除 POST {"type":1,//1、代表质量；2、代表安全"ids":11111,2222,3333}
    fetchCommonProblemDelete: (id) => `${baseUrl}v1/projects/${id}/taskCommonDescription/batchDelete`,
    //常见问题上下移动【POST】{"id":11111,"action":1//1、代表上移；2、代表下移}
    fetchCommonProblemMove: (id) => `${baseUrl}v1/projects/${id}/taskCommonDescription/updown`,
    //常见问题导入Excel  TODO file : excel文件
    fetchCommonProblemImportExcel: (id, type = 'quality') => `${baseUrl}v1/projects/${id}/taskCommonDescription/import/${type}`,
    //常见问题导出Excel 【GET】  TODO type==security==quality
    fetchCommonProblemExportExcel: (id, type = 'quality') => `${baseUrl}v1/projects/${id}/taskCommonDescription/export/${type}`,
    //常见问题下拉框列表（只有分组）GET type 1、代表；2、代表安全
    fetchCommonProblemleDropDownList: (id) => `${baseUrl}v1/projects/${id}/taskCommonDescription/dropDownList`,
    //常见问题列表（全部）GET type 1、代表质量；2、代表安全
    fetchCommonProblemleList: (id) => `${baseUrl}v1/projects/${id}/taskCommonDescription/searchList`,

    //扩展字段部分接口api
    //  TODO　扩展字段
    //扩展字段新增 POST {"taskExpand":[{"type":1,"displayName":"displayName1111","action":"create"}]}
    fetchExtendedFieldAdd: commonUrl,
    //扩展字段更新【POST】{"taskExpand":[{"id":1538953200741399,"type":1,"displayName":"displayName11112222","action":"updat"}]}
    fetchExtendedFieldUpdate: commonUrl,
    //扩展字段删除
    fetchExtendedFieldDelete: commonUrl,
    //扩展字段上下移动 【POST】{"id":11111,"action":1//1、代表上移；2、代表下移}
    fetchExtendedFieldMove: (id) => `${baseUrl}v1/projects/${id}/task_expend/updown`,
    //扩展字段列表【GET】{type:1或2}
    fetchExtendedFieldList: (id) => `${baseUrl}v1/projects/${id}/task_expend/searchList`,

    // 界面设计接口
    fetchLogoAdd: (projectId) => `${baseUrl}v1/projects/${projectId}/logo/add`,
    fetchLogoByProjectId: (projectId) => `${baseUrl}v1/projects/${projectId}/logo/get`,
    fetchLogoDelete: (projectId) => `${baseUrl}v1/projects/${projectId}/logo/delete`,

    //  TODO 获取上传文件地址 【post】
    //fetchUploadUrl:(projectId)=>`${baseUrl}/v1/projects/${projectId}/fileUpload/getUploadUrl`,
    fetchUploadUrl: (projectId) => `${baseUrl}v1/projects/${projectId}/fileUpload/uploadFile`,

};

export function url(name, _store, params = {}) {
    if (_store) {
        params.id = _store.state.projectId;
    }
    return baseUrl + apiVersion + api[name](params);
}

export default api;