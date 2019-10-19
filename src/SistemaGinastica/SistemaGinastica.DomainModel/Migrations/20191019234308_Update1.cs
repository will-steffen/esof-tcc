using Microsoft.EntityFrameworkCore.Migrations;

namespace SistemaGinastica.DomainModel.Migrations
{
    public partial class Update1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_group_class_instrutor_id_instructor",
                table: "group_class");

            migrationBuilder.DropPrimaryKey(
                name: "PK_instrutor",
                table: "instrutor");

            migrationBuilder.RenameTable(
                name: "instrutor",
                newName: "instructor");

            migrationBuilder.AddPrimaryKey(
                name: "PK_instructor",
                table: "instructor",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_group_class_instructor_id_instructor",
                table: "group_class",
                column: "id_instructor",
                principalTable: "instructor",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_group_class_instructor_id_instructor",
                table: "group_class");

            migrationBuilder.DropPrimaryKey(
                name: "PK_instructor",
                table: "instructor");

            migrationBuilder.RenameTable(
                name: "instructor",
                newName: "instrutor");

            migrationBuilder.AddPrimaryKey(
                name: "PK_instrutor",
                table: "instrutor",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_group_class_instrutor_id_instructor",
                table: "group_class",
                column: "id_instructor",
                principalTable: "instrutor",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
