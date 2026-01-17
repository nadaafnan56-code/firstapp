// بيانات المساعدات
let aids = [
    {type: "غذاء", location: "دير البلح", date: "2026-01-20", org: "UNRWA"},
    {type: "دواء", location: "الشجاعية", date: "2026-01-21", org: "الهلال الأحمر"},
    {type: "مياه", location: "خانيونس", date: "2026-01-22", org: "UNICEF"},
    {type: "إيواء", location: "رفح", date: "2026-01-23", org: "UNHCR"},
    {type: "غذاء", location: "بيت لاهيا", date: "2026-01-24", org: "WFP"}
];

// دالة لعرض البيانات
function displayAids(data) {
    let table = $("#aidTable");
    table.empty(); // تفريغ الجدول
    data.forEach(aid => {
        let row = `<tr>
            <td>${aid.type}</td>
            <td>${aid.location}</td>
            <td>${aid.date}</td>
            <td>${aid.org}</td>
        </tr>`;
        table.append(row);
    });
}

// عرض كل البيانات في البداية
displayAids(aids);

// فلترة حسب المنطقة
$("#filterRegion").change(function(){
    let selected = $(this).val();
    if(selected === "all"){
        displayAids(aids);
    } else {
        let filtered = aids.filter(aid => aid.location === selected);
        displayAids(filtered);
    }
});

// تسجيل طلب مساعدة
$("#aidForm").submit(function(e){
    e.preventDefault(); // منع إعادة تحميل الصفحة
    let name = $("#name").val();
    let area = $("#area").val();
    let type = $("#aidType").val();

    if(name && area && type){
        $("#formMessage").text(`تم تسجيل طلبك، ${name}. سيتم التواصل معك قريبًا`);
        // مسح البيانات بعد الإرسال
        $(this)[0].reset();
    } else {
        $("#formMessage").text("يرجى تعبئة جميع الحقول").css("color","red");
    }
});