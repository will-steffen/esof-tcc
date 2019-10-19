using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SistemaGinastica.DomainModel.Migrations
{
    public partial class DbStart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "customer",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    txt_name = table.Column<string>(maxLength: 150, nullable: false),
                    txt_cpf = table.Column<string>(maxLength: 20, nullable: false),
                    txt_rg = table.Column<string>(maxLength: 20, nullable: false),
                    txt_address = table.Column<string>(maxLength: 250, nullable: false),
                    dt_birth = table.Column<DateTime>(nullable: false),
                    cd_plan_type = table.Column<int>(nullable: false),
                    num_plan_value = table.Column<float>(nullable: false),
                    txt_registration = table.Column<string>(maxLength: 150, nullable: true),
                    fl_active = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_customer", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "exam_anamnesis",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exam_anamnesis", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "exam_ergonometric",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exam_ergonometric", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "exam_ergonometric_step",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exam_ergonometric_step", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "exam_skin_fold",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exam_skin_fold", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "instrutor",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    txt_name = table.Column<string>(maxLength: 150, nullable: false),
                    txt_cpf = table.Column<string>(maxLength: 20, nullable: false),
                    txt_rg = table.Column<string>(maxLength: 20, nullable: false),
                    fl_authorized_muscle = table.Column<bool>(nullable: false),
                    fl_authorized_group_class = table.Column<bool>(nullable: false),
                    fl_active = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_instrutor", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    txt_name = table.Column<string>(maxLength: 150, nullable: false),
                    txt_cpf = table.Column<string>(maxLength: 20, nullable: false),
                    txt_rg = table.Column<string>(maxLength: 20, nullable: false),
                    txt_username = table.Column<string>(maxLength: 150, nullable: false),
                    txt_hash_password = table.Column<string>(maxLength: 250, nullable: true),
                    txt_salt = table.Column<string>(maxLength: 250, nullable: true),
                    cd_type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "payment",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    dt_expected = table.Column<DateTime>(nullable: false),
                    dt_payment = table.Column<DateTimeOffset>(nullable: true),
                    dt_period_start = table.Column<DateTime>(nullable: false),
                    dt_period_end = table.Column<DateTime>(nullable: false),
                    num_value = table.Column<float>(nullable: false),
                    id_customer = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payment", x => x.id);
                    table.ForeignKey(
                        name: "FK_payment_customer_id_customer",
                        column: x => x.id_customer,
                        principalTable: "customer",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "group_class",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    hr_init = table.Column<DateTime>(nullable: false),
                    hr_end = table.Column<DateTime>(nullable: false),
                    txt_room = table.Column<string>(maxLength: 250, nullable: false),
                    txt_name = table.Column<string>(maxLength: 250, nullable: false),
                    fl_active = table.Column<bool>(nullable: false),
                    id_instructor = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_group_class", x => x.id);
                    table.ForeignKey(
                        name: "FK_group_class_instrutor_id_instructor",
                        column: x => x.id_instructor,
                        principalTable: "instrutor",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "physical_evaluation",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    id_customer = table.Column<long>(nullable: false),
                    id_user = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_physical_evaluation", x => x.id);
                    table.ForeignKey(
                        name: "FK_physical_evaluation_customer_id_customer",
                        column: x => x.id_customer,
                        principalTable: "customer",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_physical_evaluation_user_id_user",
                        column: x => x.id_user,
                        principalTable: "user",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "vacation",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    dt_init = table.Column<DateTime>(nullable: false),
                    dt_end = table.Column<DateTime>(nullable: false),
                    id_payment = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_vacation", x => x.id);
                    table.ForeignKey(
                        name: "FK_vacation_payment_id_payment",
                        column: x => x.id_payment,
                        principalTable: "payment",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "group_class_week_day",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    cd_week_day = table.Column<int>(nullable: false),
                    id_group_class = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_group_class_week_day", x => x.id);
                    table.ForeignKey(
                        name: "FK_group_class_week_day_group_class_id_group_class",
                        column: x => x.id_group_class,
                        principalTable: "group_class",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "presence",
                columns: table => new
                {
                    id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    dt_create = table.Column<DateTimeOffset>(nullable: false),
                    dt_update = table.Column<DateTimeOffset>(nullable: false),
                    id_customer = table.Column<long>(nullable: false),
                    id_group_class = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_presence", x => x.id);
                    table.ForeignKey(
                        name: "FK_presence_customer_id_customer",
                        column: x => x.id_customer,
                        principalTable: "customer",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_presence_group_class_id_group_class",
                        column: x => x.id_group_class,
                        principalTable: "group_class",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_group_class_id_instructor",
                table: "group_class",
                column: "id_instructor");

            migrationBuilder.CreateIndex(
                name: "IX_group_class_week_day_id_group_class",
                table: "group_class_week_day",
                column: "id_group_class");

            migrationBuilder.CreateIndex(
                name: "IX_payment_id_customer",
                table: "payment",
                column: "id_customer");

            migrationBuilder.CreateIndex(
                name: "IX_physical_evaluation_id_customer",
                table: "physical_evaluation",
                column: "id_customer");

            migrationBuilder.CreateIndex(
                name: "IX_physical_evaluation_id_user",
                table: "physical_evaluation",
                column: "id_user");

            migrationBuilder.CreateIndex(
                name: "IX_presence_id_customer",
                table: "presence",
                column: "id_customer");

            migrationBuilder.CreateIndex(
                name: "IX_presence_id_group_class",
                table: "presence",
                column: "id_group_class");

            migrationBuilder.CreateIndex(
                name: "IX_vacation_id_payment",
                table: "vacation",
                column: "id_payment");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "exam_anamnesis");

            migrationBuilder.DropTable(
                name: "exam_ergonometric");

            migrationBuilder.DropTable(
                name: "exam_ergonometric_step");

            migrationBuilder.DropTable(
                name: "exam_skin_fold");

            migrationBuilder.DropTable(
                name: "group_class_week_day");

            migrationBuilder.DropTable(
                name: "physical_evaluation");

            migrationBuilder.DropTable(
                name: "presence");

            migrationBuilder.DropTable(
                name: "vacation");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "group_class");

            migrationBuilder.DropTable(
                name: "payment");

            migrationBuilder.DropTable(
                name: "instrutor");

            migrationBuilder.DropTable(
                name: "customer");
        }
    }
}
