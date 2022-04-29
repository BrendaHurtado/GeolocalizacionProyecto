using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace apipackages.Migrations
{
    public partial class initialpackage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Packages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FechaEnvio = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FechaEntrega = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EstadoEntrega = table.Column<bool>(type: "bit", nullable: false),
                    SubtotalPaquete = table.Column<double>(type: "float", nullable: false),
                    IvaPaquete = table.Column<double>(type: "float", nullable: false),
                    TotalPaquete = table.Column<double>(type: "float", nullable: false),
                    OrigenPaquete = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DestinoPaquete = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdRuta = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Packages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DetailPackages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypePackage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrecioPackage = table.Column<double>(type: "float", nullable: false),
                    CodePackage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PackageId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetailPackages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetailPackages_Packages_PackageId",
                        column: x => x.PackageId,
                        principalTable: "Packages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DetailPackages_PackageId",
                table: "DetailPackages",
                column: "PackageId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DetailPackages");

            migrationBuilder.DropTable(
                name: "Packages");
        }
    }
}
